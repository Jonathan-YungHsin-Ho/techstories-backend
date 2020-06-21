exports.seed = function (knex) {
	return knex('onboarding').insert([
		{
			name: 'Test User 1',
			experience: 'Hello',
		},
		{
			name: 'Test User 2',
			experience: 'Hey',
		},
	]);
};
