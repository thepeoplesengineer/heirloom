import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const NonQuestionEntry = sequelize.define('NonQuestionEntry', {
  conversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Conversations',
      key: 'id',
    },
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  part: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default NonQuestionEntry;
