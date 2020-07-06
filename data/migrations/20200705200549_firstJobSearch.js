exports.up = function (knex) {
	return knex.schema.createTable('firstJobSearch', (tbl) => {
		tbl.increments();
		tbl.string('name', 128);
		tbl.string('email', 128);
		tbl.string('role', 128);
		tbl.string('education', 128);
		tbl.string('jobSearchDuration', 128);
		tbl.string('applicationsSent', 128);
		tbl.string('initialInterviews', 128);
		tbl.string('followupInterviews', 128);
		tbl.string('finalInterviews', 128);
		tbl.string('jobOffers', 128);
		tbl.string('experience', 1500).notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('firstJobSearch');
};
