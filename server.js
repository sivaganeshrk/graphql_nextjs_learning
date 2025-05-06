import express from "express";
import { ApolloServer } from "apollo-server-express";
import gqlSchema from "./schema/index.js";
import resolvers from "./resolvers/index.js";
import { sequelize, connectPostgres, connectMongo } from "./datasource/connectors/index.js";
import config from "./config.js"
import { constraintDirective, constraintDirectiveTypeDefs } from 'graphql-constraint-directive';
import { makeExecutableSchema } from '@graphql-tools/schema';
async function bootApplication() {
  try {
    const app = express();
    const schema = constraintDirective()(makeExecutableSchema({ typeDefs:gqlSchema, resolvers }));
    const apolloSever = new ApolloServer({
      schema,
      context: { sequelize },
    });
    await apolloSever.start()
    apolloSever.applyMiddleware({ app });

    await connectPostgres();
    await connectMongo()

    app.listen(config.app_port, ()=>{
      console.info(`Application Started: Forum prototype on http://localhost:${config.app_port}${apolloSever.graphqlPath}`)
    })
  } catch (error) {
    console.error("Application Boot Failed");
    console.error(error);
    process.exit(1);
  }
}

bootApplication();
