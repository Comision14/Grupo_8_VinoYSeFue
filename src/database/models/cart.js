'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Order,{
        as: 'order',
        foreignKey: 'orderId'
      });
      Cart.belongsTo(models.Product,{
        as: 'product',
        foreignKey: 'productId'
      })
      
    }
  }
  Cart.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
    paranoid:true
  });
  return Cart;
};