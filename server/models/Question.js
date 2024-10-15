import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Question = sequelize.define('Question', {
  conversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Conversations',
      key: 'id',
    },
  },
  questionText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Question;
