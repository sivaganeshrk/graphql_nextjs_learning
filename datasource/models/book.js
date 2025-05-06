"use strict";
import { Model } from "sequelize";
import { Author } from "./author";
import { ulid } from "ulid";
export default (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.Author, { foreignKey: "author_id", as: "author" });
    }
  }
  Book.init(
    {
      id: {
        type: DataTypes.STRING(26),
        primaryKey: true,
        allowNull: false,
        defaultValue: () => ulid(),
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      published_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      author_id: {
        type: DataTypes.STRING(26),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Book",
      tableName: "book",
    }
  );
  return Book;
};
