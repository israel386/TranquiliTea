const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Entry extends Model {}

Entry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    entry_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entry_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "entry",
  }
);

module.exports = Entry;
