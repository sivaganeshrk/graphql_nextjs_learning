"use strict";
import { sequelize } from "../connectors/index.js";
import {DataTypes} from "sequelize"
import { ulid } from "ulid";

export const Book = sequelize.define(
  "Book",
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
    modelName: "Book",
    tableName: "book",
  }
);