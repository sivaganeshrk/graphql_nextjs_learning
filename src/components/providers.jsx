'use client'
import { ApolloProvider } from '@apollo/client'

const Providers = ({ client, children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Providers