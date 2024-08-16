// routes/sample.js
/**
 * @swagger
 * /sample:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
const express = require('express');
const router = express.Router();
/**
 * @swagger
 * /sample:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get('/sample', (req, res) => {
  res.json({ message: 'This is a sample message' });
});

module.exports= router;