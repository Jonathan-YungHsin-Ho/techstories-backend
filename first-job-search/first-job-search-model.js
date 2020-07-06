const db = require('../data/db-config');

module.exports = {
	add,
	find,
	findById,
	update,
	remove,
};

function add(story) {
	return db('firstJobSearch')
		.insert(story, 'id')
		.then((ids) => {
			const [id] = ids;
			return findById(id);
		});
}

function find() {
	return db('firstJobSearch');
}

function findById(id) {
	return db('firstJobSearch').where({ id }).first();
}

function update(changes, id) {
	return db('firstJobSearch')
		.where({ id })
		.update(changes)
		.then(() => findById(id));
}

function remove(id) {
	return db('firstJobSearch').where({ id }).del();
}
