// backend/src/app.js
const express = require('express');
const cors = require('cors');
const productRoutes = require('./modules/product/product.routes');
// ... other routes imports later

const app = express();

app.use(express.json());

// ────────────────────────────────────────────────
// Task 3 – This is the important missing line
// Allows frontend (usually http://localhost:5173 with Vite) to reach backend
app.use(cors({
  origin: 'http://localhost:5173',     // ← add this (change to 3000 if using CRA)
  credentials: true,                   // optional – only if you use cookies/sessions later
}));
// ────────────────────────────────────────────────

app.use('/api/products', productRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;