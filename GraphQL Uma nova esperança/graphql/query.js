const { filmsQueries } = require('./resources/films/films.schema');

const Query = `
    type Query {
        ${filmsQueries}
    }
`;

module.exports = {
    Query,
}