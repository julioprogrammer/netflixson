const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./graphql/schema');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(8080).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});