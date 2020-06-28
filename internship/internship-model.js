const db = require('../data/db-config');

module.exports = {
	add,
	find,
	findById,
	update,
	remove,
};

function add(story) {
	return db('internship')
		.insert(story, 'id')
		.then((ids) => {
			const [id] = ids;
			return findById(id);
		});
}

function find() {
	return db('internship');
}

function findById(id) {
	return db('internship').where({ id }).first();
}

function update(changes, id) {
	return db('internship')
		.where({ id })
		.update(changes)
		.then(() => findById(id));
}

function remove(id) {
	return db('internship').where({ id }).del();
}
