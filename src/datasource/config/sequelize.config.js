const config = require("../../config");
const pg = require("pg")
module.exports = {
  username: config.pg.username,
  password: config.pg.password,
  hostname: config.pg.hostname,
  port: config.pg.port,
  database: config.pg.database,
  dialect: "postgres",
  dialectModule: pg,
  logging: config.db_logs,
};
