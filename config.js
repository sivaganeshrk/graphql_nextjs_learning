// import dotenv from "dotenv"
const dotenv = require("dotenv")

dotenv.config()

const config = {
  pg: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    hostname: process.env.PG_HOSTNAME,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
  },
  mongo_url: process.env.MONGODB_URL,
  log_level: process.env.LOG_LEVEL,
  db_logs: process.env.ENABLE_DB_LOG === "true" ? true: false,
  app_port: process.env.APP_PORT || 5003
}

module.exports = config