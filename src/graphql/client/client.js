import config from "@/config"
import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
  uri: config.graphql_url,
  cache: new InMemoryCache() 
})

export default apolloClient