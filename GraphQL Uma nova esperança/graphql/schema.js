const { gql } = require('apollo-server');
const { merge } = require('lodash');

const { Query } = require('./query');

const { filmsTypes } = require('./resources/films/films.schema');

const { filmsResolvers } = require('./resources/films/films.resolvers');

const resolvers = merge(
    filmsResolvers,
);

const SchemaDefinition = `
    type Schema {
        query: Query
    }
`;

const typeDefs = gql`
    ${SchemaDefinition}
    ${filmsTypes}
    ${Query}
`;

module.exports = {
    typeDefs,
    resolvers
};