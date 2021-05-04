const { films, actors } = require('../../../data');

const filmsResolvers = {
    Query: {
        films: () => films.map(x => {
            return {
                ...x,
                actors: actors.filter(a => a.filmsIds.includes(x.id))
            }
        }),
        actors: () => actors
    }
};

module.exports = { filmsResolvers };