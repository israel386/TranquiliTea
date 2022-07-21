const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Affirmations extends Model {}

Affirmations.init(
    {
        //create columns 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        affirmation_phrase:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'affirmations',
      }
); 

module.exports = Affirmations;
