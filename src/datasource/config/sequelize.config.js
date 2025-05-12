const config = require("../../config");
const pg = require("pg")

module.exports = {
  url: config.postgres_url,
  dialect: "postgres",
  dialectModule: pg,
  logging: config.db_logs,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
