import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();  
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: console.log,  // This will log the SQL queries being run
  });
  

export default sequelize;

