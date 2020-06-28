const db = require('../data/db-config');

module.exports = {
	add,
	find,
	findById,
	update,
	remove,
};

function add(story) {
	return db('onboarding')
		.insert(story, 'id')
		.then((ids) => {
			const [id] = ids;
			return findById(id);
		});
}

function find() {
	return db('onboarding');
}

function findById(id) {
	return db('onboarding').where({ id }).first();
}

function update(changes, id) {
	return db('onboarding')
		.where({ id })
		.update(changes)
		.then(() => findById(id));
}

function remove(id) {
	return db('onboarding').where({ id }).del();
}
