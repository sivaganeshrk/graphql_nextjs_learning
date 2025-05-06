import express from "express";
import { ApolloServer } from "apollo-server-express";
import gqlSchema from "./schema/index.js";
import resolvers from "./resolvers/index.js";
import { sequelize, connectPostgres } from "./datasource/connectors/index.js";
import config from "./config.js"
async function bootApplication() {
  try {
    const app = express();
    const apolloSever = new ApolloServer({
      typeDefs: gqlSchema,
      resolvers,
      context: { sequelize },
    });
    await apolloSever.start()
    apolloSever.applyMiddleware({ app });

    await connectPostgres();

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
