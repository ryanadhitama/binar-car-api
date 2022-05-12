"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      car.belongsTo(models.size, {
        foreignKey: "size_id",
      });
    }
  }
  car.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      size_id: DataTypes.INTEGER,
      photo: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
      deleted_at: DataTypes.DATE,
      deleted_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "car",
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    }
  );
  return car;
};
