
const dotenv = require("dotenv")

dotenv.config()
const config = {
  postgres_url: process.env.POSTGRES_URL,
  graphql_schema_introspection: process.env.GRAPHQL_SCHEMA_INTROSPECTION === "true" ? true : false,
  mongo_url: process.env.MONGODB_URL,
  log_level: process.env.LOG_LEVEL,
  db_logs: process.env.ENABLE_DB_LOG === "true" ? true: false,
  app_port: process.env.APP_PORT || 5003,
  graphql_url: `${ process.env.USE_HTTPS === "true" ? 'https' : 'http' }://${process.env.NEXT_PUBLIC_GRAPHQL_URL}/api/graphql`
}

module.exports = config