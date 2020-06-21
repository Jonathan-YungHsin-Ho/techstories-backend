exports.up = function (knex) {
	return knex.schema.createTable('onboarding', (tbl) => {
		tbl.increments();
		tbl.string('name', 128);
		tbl.string('email', 128);
		tbl.string('website', 128);
		tbl.string('company', 128);
		tbl.string('companyURL', 128);
		tbl.string('industry', 128);
		tbl.string('companyType', 128);
		tbl.string('companySize', 128);
		tbl.string('onboardingDuration', 128);
		tbl.boolean('mentorProvided');
		tbl.string('experience', 1000).notNullable();
		tbl.boolean('positiveOnboarding');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('onboarding');
};
