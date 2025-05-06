"use strict";
import { sequelize } from "../connectors/index.js";
import { ulid } from "ulid";
module.exports = (sequelize, DataTypes) => {
  class Author extends sequelize.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Author.hasMany(models.Book, {
        foreignKey: "author_id",
        as: "books",
        onDelete: "CASCADE",
      });
    }
  }
  Author.init(
    {
      id: {
        type: DataTypes.STRING(26),
        primaryKey: true,
        allowNull: false,
        defaultValue: () => ulid(),
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      biography: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      born_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Author",
      tableName: "author",
    }
  );
  return Author;
};
