import { GraphQLClient } from "graphql-hooks";

export const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GRAPHQL_API_TOKEN}`,
  },
});
