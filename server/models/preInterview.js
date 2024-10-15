import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js'; 

const PreInterview = sequelize.define('PreInterview', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,  // Foreign key linking to the User model
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  birthplace: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  event1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  event2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  event3: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

User.hasMany(PreInterview, { foreignKey: 'userId' });
PreInterview.belongsTo(User, { foreignKey: 'userId' });

export default PreInterview;

