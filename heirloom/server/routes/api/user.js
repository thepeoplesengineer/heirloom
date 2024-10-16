import express from 'express';
import authenticateToken from '../../middleware/auth.js';

const router = express.Router();

// Landing Page Route (JWT Protected)
router.get('/landing', authenticateToken, (req, res) => {
  res.json({
    message: 'Welcome to your landing page!',
    user: req.user,
    dashboard: [
      { name: 'Memoir AI', link: '/api/memoir/create' },
      { name: 'Settings', link: '/api/user/settings' },
      { name: 'Personal Info', link: '/api/user/profile' },
    ],
  });
});

// User Settings Route
router.get('/settings', authenticateToken, (req, res) => {
  res.json({ message: 'Here are your current settings', settings: {} });
});

// Update User Settings
router.put('/settings', authenticateToken, (req, res) => {
  const { settings } = req.body;
 
  res.json({ message: 'Settings updated successfully' });
});

// Personal Info Route
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Your personal information', user: req.user });
});

// Update Personal Info
router.put('/profile', authenticateToken, (req, res) => {
  const { email, name } = req.body;
  
  res.json({ message: 'Profile updated successfully' });
});

export default router;
