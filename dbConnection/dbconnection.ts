const { Sequelize } = require('sequelize');
import * as dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

const db_connection = async  () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return('DB connection established')
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        return('DB connection failed')
      }
}

module.exports = db_connection;