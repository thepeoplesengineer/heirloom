import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Conversation = sequelize.define('Conversation', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  initialPrompt: {
    type: DataTypes.TEXT,
    allowNull: false, // The user's initial input
  },
  aiResponse: {
    type: DataTypes.TEXT,
    allowNull: false, // The AI's first response to the user
  },
  conversationHistory: {
    type: DataTypes.JSONB, // Use JSONB for storing the entire conversation (structured data)
    allowNull: true, // The full history of the conversation
  },
});

export default Conversation;

