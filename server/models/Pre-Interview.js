// server/models/PreInterview.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Ensure correct path

const PreInterview = sequelize.define('PreInterview', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  birthplace: {
    type: DataTypes.STRING,
    allowNull: false
  },
  event1: {
    type: DataTypes.STRING
  },
  event2: {
    type: DataTypes.STRING
  },
  event3: {
    type: DataTypes.STRING
  }
});

export default PreInterview;
