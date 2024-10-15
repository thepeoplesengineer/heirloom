import express from 'express';
import { registerUser, loginUser } from '../../controllers/authController.js';
import authenticateToken from '../../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/create-memoir', authenticateToken, (req, res) => {
  // Only authenticated users can access this route
  res.send('Memoir creation route accessed!');
});

export default router;



