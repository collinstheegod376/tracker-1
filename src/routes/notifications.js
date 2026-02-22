// ============================================================
// Push Notifications Routes
// POST /api/notifications/subscribe   - save push subscription
// DELETE /api/notifications/unsubscribe
// POST /api/notifications/send-test   - send a test push
// ============================================================
const express = require('express');
const webpush = require('web-push');
const pool = require('../db/pool');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Configure VAPID keys for web push
webpush.setVapidDetails(
  process.env.VAPID_EMAIL,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

router.use(authMiddleware);

// ── Save push subscription ──────────────────────────────────
router.post('/subscribe', async (req, res) => {
  const { endpoint, keys } = req.body;
  if (!endpoint || !keys?.p256dh || !keys?.auth) {
    return res.status(400).json({ error: 'Invalid push subscription object' });
  }

  try {
    await pool.query(
      `INSERT INTO push_subscriptions (user_id, endpoint, p256dh, auth)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (endpoint) DO UPDATE SET user_id = $1`,
      [req.userId, endpoint, keys.p256dh, keys.auth]
    );
    res.json({ message: 'Push subscription saved' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Remove push subscription ────────────────────────────────
router.delete('/unsubscribe', async (req, res) => {
  const { endpoint } = req.body;
  await pool.query(
    'DELETE FROM push_subscriptions WHERE endpoint = $1 AND user_id = $2',
    [endpoint, req.userId]
  );
  res.json({ message: 'Unsubscribed' });
});

// ── Send test notification ──────────────────────────────────
router.post('/send-test', async (req, res) => {
  try {
    const subs = await pool.query(
      'SELECT endpoint, p256dh, auth FROM push_subscriptions WHERE user_id = $1',
      [req.userId]
    );

    const payload = JSON.stringify({
      title: '🔔 SubTrack Reminder',
      body: 'Your Netflix subscription renews in 3 days!',
      icon: '/icon-192.png',
    });

    const results = await Promise.allSettled(
      subs.rows.map((sub) =>
        webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          payload
        )
      )
    );

    res.json({ sent: results.filter((r) => r.status === 'fulfilled').length });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send notifications' });
  }
});

// ── Scheduled job: send due-date reminders ──────────────────
// Call this from a cron job or Render's cron service
async function sendDueReminders() {
  try {
    // Find subscriptions due in the next 3 days
    const subs = await pool.query(`
      SELECT s.id, s.service_name, s.custom_name, s.price, s.due_date,
             u.id as user_id
      FROM subscriptions s
      JOIN users u ON s.user_id = u.id
      WHERE s.is_active = TRUE
        AND s.due_date BETWEEN NOW() AND NOW() + INTERVAL '3 days'
    `);

    for (const sub of subs.rows) {
      const pushSubs = await pool.query(
        'SELECT endpoint, p256dh, auth FROM push_subscriptions WHERE user_id = $1',
        [sub.user_id]
      );

      const daysUntil = Math.ceil(
        (new Date(sub.due_date) - new Date()) / (1000 * 60 * 60 * 24)
      );
      const name = sub.custom_name || sub.service_name;

      const payload = JSON.stringify({
        title: `💳 ${name} renews soon!`,
        body: `$${sub.price} due in ${daysUntil} day${daysUntil !== 1 ? 's' : ''}`,
        icon: '/icon-192.png',
        tag: sub.id,
      });

      for (const ps of pushSubs.rows) {
        webpush
          .sendNotification(
            { endpoint: ps.endpoint, keys: { p256dh: ps.p256dh, auth: ps.auth } },
            payload
          )
          .catch(console.error);
      }
    }
    console.log(`Sent reminders for ${subs.rows.length} subscriptions`);
  } catch (err) {
    console.error('sendDueReminders error:', err.message);
  }
}

module.exports = { router, sendDueReminders };
