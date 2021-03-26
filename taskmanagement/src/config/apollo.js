import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import React from 'react';


const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://mockup-graphql-task-m.herokuapp.com/graphql',
  }),
  cache: new InMemoryCache(),
});


const GraphProvider = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
export {GraphProvider};
export default client;
