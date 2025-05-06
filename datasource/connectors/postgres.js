import { Sequelize } from "sequelize";
import { sequelizeConfig } from "../config";

export default new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  sequelizeConfig
);
