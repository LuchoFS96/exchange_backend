const { DataTypes } = require("sequelize");
const sequelize = require("../database.js");

const Crypto = sequelize.define("Crypto", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  short: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valueUSD: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Crypto;
