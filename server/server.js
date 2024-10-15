import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js'; 
import authRoutes from './routes/api/auth.js';
import memoirRoutes from './routes/api/memoir.js';
import preInterviewRoutes from './routes/api/preInterview.js';
import conversationRoutes from './routes/api/conversation.js';

const app = express();

// Use middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/memoir', memoirRoutes);
app.use('/api/pre-interview', preInterviewRoutes);
app.use('/api/conversation', conversationRoutes); 


sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
