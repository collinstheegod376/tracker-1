// ============================================================
// SubTrack API - Main Entry Point
// ============================================================
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const subscriptionRoutes = require('./routes/subscriptions');
const { router: notificationRoutes, sendDueReminders } = require('./routes/notifications');

const app = express();
const PORT = process.env.PORT || 4000;

// ── Security Headers ────────────────────────────────────────
app.use(helmet());

// ── CORS Configuration ──────────────────────────────────────
// Allow requests from your Vercel frontend
const allowedOrigins = [
  process.env.FRONTEND_URL,          // e.g. https://yourapp.vercel.app
  'http://localhost:3000',            // local development
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked: ${origin}`));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// ── Body Parsing ────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }));

// ── Rate Limiting ───────────────────────────────────────────
// Prevents brute-force attacks on auth endpoints
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                  // 100 requests per window
  message: { error: 'Too many requests, please try again later.' },
});
app.use('/api/', limiter);

// Stricter limit on auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many login attempts, please try again later.' },
});
app.use('/api/auth/', authLimiter);

// ── Routes ──────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/notifications', notificationRoutes);

// ── Health Check ────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── 404 Handler ─────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── Global Error Handler ────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// ── Start Server ────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 SubTrack API running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV}`);
});

// ── Daily Reminder Cron ─────────────────────────────────────
// Runs once daily at 9 AM to send push notifications
// For production, use Render's cron job feature or node-cron
if (process.env.NODE_ENV === 'production') {
  const now = new Date();
  const nextRun = new Date();
  nextRun.setHours(9, 0, 0, 0);
  if (nextRun <= now) nextRun.setDate(nextRun.getDate() + 1);

  const msUntilRun = nextRun - now;
  setTimeout(() => {
    sendDueReminders();
    setInterval(sendDueReminders, 24 * 60 * 60 * 1000); // every 24h
  }, msUntilRun);

  console.log(`⏰ Daily reminders scheduled for 9:00 AM`);
}

module.exports = app;
