const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");

const schemaPath = "./schema/index.graphql";

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

/* On your graphiQl */
// Fragment

// this query uses fragment. Use it like a spread operator
// query {
//   user(id: 3) {
//     ...completedUser
//   }
//   users {
//     ...completedUser
//   }
// }

// Defines a fragment to be reused on queries above
// fragment completedUser on User {
//   id
//   name
//   email
//   salary
//   vip
//   profile {
//     name
//     id
//   }
// }
