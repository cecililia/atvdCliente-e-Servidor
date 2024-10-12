// backend/models/Product.js
const { DataTypes } = require('sequelize');
const db = require('../database'); 

const Product = db.sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

// Sincronize o modelo com o banco de dados
Product.sync();

module.exports = Product;
