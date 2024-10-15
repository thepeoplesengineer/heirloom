import express from 'express';
import { savePreInterview, getPreInterview } from '../../controllers/preInterviewController.js';

import authenticateToken from '../../middleware/auth.js';  // Ensure route is protected

const router = express.Router();

// Save Pre-Interview data
router.post('/', authenticateToken, savePreInterview);

// Optionally: Get Pre-Interview data
router.get('/', authenticateToken, getPreInterview);

export default router;




