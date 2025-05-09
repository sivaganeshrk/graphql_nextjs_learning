'use client'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '@/graphql/client/client'

const Providers = ({ children }) => {
    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

export default Providers