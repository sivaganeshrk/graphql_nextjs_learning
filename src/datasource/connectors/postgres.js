import { Sequelize } from "sequelize";
import {sequelizeConfig} from "../config/index.js";

export const sequelize = new Sequelize(
  sequelizeConfig.default.url,
  sequelizeConfig.default
);

export async function connectPostgres() {
  try {
    console.info("postgres_connector: Connecting to database");
    await sequelize.authenticate()
    console.info("postgres_connector: Connection Successful");
  } catch (error) {
    console.error("postgres_connector: Connection Failed")
    throw error
  }
}