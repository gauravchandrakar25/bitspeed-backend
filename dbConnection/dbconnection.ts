const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
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