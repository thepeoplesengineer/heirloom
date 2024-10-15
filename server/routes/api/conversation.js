import express from 'express';
import { startConversation, resetConversation } from '../../controllers/conversationController.js';
import authenticateToken from '../../middleware/auth.js'; // Ensure route protection

const router = express.Router();

router.post('/start', authenticateToken, startConversation);  // Protected route
router.post('/reset', authenticateToken, resetConversation);  // Protected route

export default router;
