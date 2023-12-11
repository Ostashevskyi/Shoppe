import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLClient } from "graphql-hooks";

export const client = new ApolloClient({
  uri: "https://graphql.datocms.com/",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GRAPHQL_API_TOKEN}`,
  },
});
