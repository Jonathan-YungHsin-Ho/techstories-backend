exports.up = function (knex) {
	return knex.schema
		.createTable('onboarding', (tbl) => {
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
			tbl.string('experience', 1500).notNullable();
			tbl.boolean('positiveOnboarding');
		})
		.createTable('internship', (tbl) => {
			tbl.increments();
			tbl.string('name', 128);
			tbl.string('email', 128);
			tbl.string('website', 128);
			tbl.string('company', 128);
			tbl.string('companyURL', 128);
			tbl.string('industry', 128);
			tbl.string('companyType', 128);
			tbl.string('companySize', 128);
			tbl.string('internshipDuration', 128);
			tbl.boolean('mentorProvided');
			tbl.boolean('positionOffered');
			tbl.string('experience', 1500).notNullable();
			tbl.boolean('positiveInternship');
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('internship')
		.dropTableIfExists('onboarding');
};
