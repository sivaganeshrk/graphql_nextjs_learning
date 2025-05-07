const config = require("../../config");
module.exports = {
  username: config.pg.username,
  password: config.pg.password,
  hostname: config.pg.hostname,
  port: config.pg.port,
  database: config.pg.database,
  dialect: "postgres",
  logging: config.db_logs,
};
