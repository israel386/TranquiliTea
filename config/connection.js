require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
<<<<<<< HEAD
    process.env.DB_PW,
=======
    process.env.DB_PASSWORD,
>>>>>>> phil-css-dev

    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3001,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
