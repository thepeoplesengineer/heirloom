

import express from 'express';
import authenticateToken from '../../middleware/auth.js';

const router = express.Router();

let memoirs = []; // Temporary in-memory storage for memoirs

// Memoir creation route (protected)
router.post('/create', authenticateToken, (req, res) => {
  const { title, content } = req.body;

  // Check if title and content are provided
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  const newMemoir = {
    id: memoirs.length + 1, // Assign an incremental ID
    title,
    content,
    userId: req.user.id, // Store the user ID from the JWT
  };

  memoirs.push(newMemoir); // Add the new memoir to the in-memory array

  res.json({
    message: 'Memoir created successfully',
    memoir: newMemoir, // Return the full memoir object
  });
});

// Memoir viewing route (protected)
router.get('/view', authenticateToken, (req, res) => {
  res.json(memoirs); // Return all memoirs
});

export default router;
