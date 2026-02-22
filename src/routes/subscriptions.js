// ============================================================
// Subscriptions Routes
// GET    /api/subscriptions         - list all for current user
// POST   /api/subscriptions         - create a new subscription
// PUT    /api/subscriptions/:id     - update a subscription
// DELETE /api/subscriptions/:id     - delete a subscription
// GET    /api/subscriptions/summary - total due this month
// ============================================================
const express = require('express');
const pool = require('../db/pool');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

// Preset service icons and colors
const PRESETS = {
  Netflix: { icon: '🎬', color: '#e50914' },
  'Amazon Prime': { icon: '📦', color: '#00a8e8' },
  Rent: { icon: '🏠', color: '#f59e0b' },
  Spotify: { icon: '🎵', color: '#1db954' },
  Internet: { icon: '🌐', color: '#6366f1' },
  Custom: { icon: '⚡', color: '#8b5cf6' },
};

// ── List all subscriptions ──────────────────────────────────
router.get('/', async (req, res) => {
  try {
    const { month, year } = req.query; // optional filter by month/year

    let query = `
      SELECT id, service_name, custom_name, price, due_date,
             recurring, color, icon, notes, is_active, created_at
      FROM subscriptions
      WHERE user_id = $1 AND is_active = TRUE
    `;
    const params = [req.userId];

    // Filter by month/year if provided
    if (month && year) {
      query += ` AND EXTRACT(MONTH FROM due_date) = $2 AND EXTRACT(YEAR FROM due_date) = $3`;
      params.push(parseInt(month), parseInt(year));
    }

    query += ' ORDER BY due_date ASC';

    const result = await pool.query(query, params);
    res.json({ subscriptions: result.rows });
  } catch (err) {
    console.error('List subscriptions error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Monthly summary (total due) ─────────────────────────────
router.get('/summary', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT
         COALESCE(SUM(price), 0) AS total_monthly,
         COUNT(*) AS subscription_count
       FROM subscriptions
       WHERE user_id = $1 AND is_active = TRUE AND recurring = TRUE`,
      [req.userId]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Create subscription ─────────────────────────────────────
router.post('/', async (req, res) => {
  const { service_name, custom_name, price, due_date, recurring, notes } = req.body;

  if (!service_name || !price || !due_date) {
    return res.status(400).json({ error: 'service_name, price, and due_date are required' });
  }

  // Apply preset icon/color or use defaults
  const preset = PRESETS[service_name] || PRESETS['Custom'];

  try {
    const result = await pool.query(
      `INSERT INTO subscriptions
         (user_id, service_name, custom_name, price, due_date, recurring, color, icon, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [
        req.userId,
        service_name,
        custom_name || null,
        parseFloat(price),
        due_date,
        recurring !== false, // default true
        preset.color,
        preset.icon,
        notes || null,
      ]
    );

    res.status(201).json({ subscription: result.rows[0] });
  } catch (err) {
    console.error('Create subscription error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Update subscription ─────────────────────────────────────
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { service_name, custom_name, price, due_date, recurring, notes } = req.body;

  try {
    // Verify ownership
    const existing = await pool.query(
      'SELECT id FROM subscriptions WHERE id = $1 AND user_id = $2',
      [id, req.userId]
    );
    if (existing.rows.length === 0) {
      return res.status(404).json({ error: 'Subscription not found' });
    }

    const preset = PRESETS[service_name] || PRESETS['Custom'];

    const result = await pool.query(
      `UPDATE subscriptions
       SET service_name = COALESCE($1, service_name),
           custom_name  = $2,
           price        = COALESCE($3, price),
           due_date     = COALESCE($4, due_date),
           recurring    = COALESCE($5, recurring),
           color        = $6,
           icon         = $7,
           notes        = $8
       WHERE id = $9 AND user_id = $10
       RETURNING *`,
      [
        service_name, custom_name, price ? parseFloat(price) : null,
        due_date, recurring, preset.color, preset.icon, notes,
        id, req.userId,
      ]
    );

    res.json({ subscription: result.rows[0] });
  } catch (err) {
    console.error('Update subscription error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Delete (soft delete) subscription ──────────────────────
router.delete('/:id', async (req, res) => {
  try {
    const result = await pool.query(
      `UPDATE subscriptions SET is_active = FALSE
       WHERE id = $1 AND user_id = $2 RETURNING id`,
      [req.params.id, req.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Subscription not found' });
    }

    res.json({ message: 'Subscription deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
