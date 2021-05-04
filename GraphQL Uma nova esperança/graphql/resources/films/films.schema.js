const filmsTypes = `
	type Film {
    	id: ID
    	title: String
        actors: [Actor]
    }

    type Actor {
    	id: ID
    	name: String
        filmsIds: [ID]
    }
`;

const filmsQueries = `
    films: [Film]
    actors: [Actor]
`;

module.exports = {
    filmsTypes,
    filmsQueries
}