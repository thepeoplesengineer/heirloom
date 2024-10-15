import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Response = sequelize.define('Response', {
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Questions',
      key: 'id',
    },
  },
  userResponse: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Response;
