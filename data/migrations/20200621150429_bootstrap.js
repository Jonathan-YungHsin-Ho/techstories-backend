exports.up = function (knex) {
	return knex.schema.createTable('onboarding', (tbl) => {
		tbl.increments();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('onboarding');
};
