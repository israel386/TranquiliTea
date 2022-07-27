const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Teas extends Model {}

Teas.init(
    {
        //create columns 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        tea_type:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        benefits: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'teas',
      }
); 

module.exports = Teas;
