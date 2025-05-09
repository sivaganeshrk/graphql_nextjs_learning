import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import {connectPostgres,connectMongo, sequelize} from "@/datasource/connectors"
import { constraintDirective } from "graphql-constraint-directive"
import { makeExecutableSchema } from "@graphql-tools/schema"
import gqlSchema from "@/graphql/server/schema"
import resolvers from "@/graphql/server/resolvers"
import config from "@/config"

try {
  await connectPostgres()
  await connectMongo()
} catch (error) {
  console.error(error);
  process.exit(1)
  
}

const schema = constraintDirective()(makeExecutableSchema({typeDefs: gqlSchema, resolvers}))
console.log(config.graphql_schema_introspection);
const apolloSever = new ApolloServer({
  schema,
  introspection: config.graphql_schema_introspection
})
const handler = startServerAndCreateNextHandler(apolloSever,{
  context: () => ({sequelize})
})

export { handler as GET, handler as POST}