exports.seed = function (knex) {
	return knex('onboarding').insert([
		{
			name: 'Tim',
			experience:
				"For the first week or two I was watching videos on the PHP framework the company I work for uses for their website, as well as some basic networking information. After that I did some pair programming with my boss on a fairly complicated piece of code as a 'trial by fire' kind of deal. When we finished that  I was given some easier things to do, like little bug fixes, or small enhancements for our website.",
			mentorProvided: true,
			positiveOnboarding: true,
		},
	]);
};
