// routes/cafes.js
import express from 'express';
import Cafe from '../models/Cafe.js';

const router = express.Router();

// Get all cafes or search by query
router.get('/', async (req, res) => {
  const { query } = req.query; // e.g., ?query=coffee
  try {
    const cafes = query
      ? await Cafe.find({ name: new RegExp(query, 'i') }) // Case-insensitive search
      : await Cafe.find();
    res.json(cafes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cafes' });
  }
});

export default router;
