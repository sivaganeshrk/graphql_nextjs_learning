// import dotenv from "dotenv"
const dotenv = require("dotenv")

dotenv.config()
console.log({
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  hostname: process.env.PG_HOSTNAME,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE
})
const config = {
  pg: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    hostname: process.env.PG_HOSTNAME,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
  },
  graphql_schema_introspection: process.env.GRAPHQL_SCHEMA_INTROSPECTION === "true" ? true : false,
  mongo_url: process.env.MONGODB_URL,
  log_level: process.env.LOG_LEVEL,
  db_logs: process.env.ENABLE_DB_LOG === "true" ? true: false,
  app_port: process.env.APP_PORT || 5003,
  graphql_url: `${ process.env.USE_HTTPS === "true" ? 'https' : 'http' }://${process.env.NEXT_PUBLIC_GRAPHQL_URL}/api/graphql`
}

module.exports = config