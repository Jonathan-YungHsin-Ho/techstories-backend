const db = require('../data/db-config');

module.exports = {
	add,
	find,
	findById,
	update,
	remove,
};

function add(story) {
	return db('codeReview')
		.insert(story, 'id')
		.then((ids) => {
			const [id] = ids;
			return findById(id);
		});
}

function find() {
	return db('codeReview');
}

function findById(id) {
	return db('codeReview').where({ id }).first();
}

function update(changes, id) {
	return db('codeReview')
		.where({ id })
		.update(changes)
		.then(() => findById(id));
}

function remove(id) {
	return db('codeReview').where({ id }).del();
}
