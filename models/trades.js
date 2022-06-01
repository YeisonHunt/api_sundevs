'use strict';
const {
  Model
} = require('sequelize');

// const sequelize = new Sequelize("sqlite::memory:");
module.exports = (sequelize, DataTypes) => {
  class Trades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Trades.init({
    type: DataTypes.STRING,
    user_id: DataTypes.STRING,
    symbol: DataTypes.STRING,
    shares: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    timestamp: DataTypes.INTEGER,
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Trades',
  });
  return Trades;
};