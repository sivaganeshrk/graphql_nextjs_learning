"use strict";
import { sequelize } from "../connectors/index.js";
import {DataTypes} from "sequelize"
import { ulid } from "ulid";


export const Author = sequelize.define('Author', {
  id: {
    type: DataTypes.STRING(26),
    allowNull: false,
    primaryKey: true,
    defaultValue: () => ulid(),
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  biography: DataTypes.TEXT,
  born_date: DataTypes.DATE,
}, {
  modelName: "Author",
  tableName: "author",
});