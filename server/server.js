import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js'; 
import authRoutes from './routes/api/auth.js';
import memoirRoutes from './routes/api/memoir.js';
import preInterviewRoutes from './routes/api/preInterview.js';
import conversationRoutes from './routes/api/conversation.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the frontend (adjust the path as necessary)
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/memoir', memoirRoutes);
app.use('/api/pre-interview', preInterviewRoutes);
app.use('/api/conversation', conversationRoutes);

// Serve the frontend for any route that isn't an API route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
});

// Sync Sequelize with database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });

// Use the environment variable PORT or default to 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
