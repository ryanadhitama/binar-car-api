'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    role: DataTypes.ENUM("SUPERADMIN", "ADMIN", "MEMBER"),
    phone: DataTypes.STRING,
    address: DataTypes.TEXT,
    deleted_at: DataTypes.DATE,
    deleted_by: DataTypes.TEXT
  }, {
    sequelize,
    paranoid: true,
    modelName: 'user',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  });
  return user;
};