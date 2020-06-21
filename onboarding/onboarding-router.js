const express = require('express');

const Onboarding = require('./onboarding-model');

const router = express.Router();

// GET /api/onboarding endpoint - Functional!
router.get('/', (_req, res) => {
	Onboarding.find()
		.then((stories) => {
			const updatedStories = stories.map((story) => {
				return {
					...story,
					mentorProvided: processBool(story.mentorProvided),
					positiveOnboarding: processBool(story.positiveOnboarding),
				};
			});
			res.status(200).json(updatedStories);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Failed to get onboarding stories' });
		});
});

// POST /api/onboarding endpoint - ?
router.post('/', (req, res) => {
	const story = req.body;

	if (story.experience) {
		Onboarding.add(story)
			.then((saved) => {
				saved.mentorProvided = processBool(saved.mentorProvided);
				saved.positiveOnboarding = processBool(saved.positiveOnboarding);
				res.status(201).json({ onboarding: saved });
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({ message: 'Error adding onboarding story' });
			});
	} else {
		res
			.status(400)
			.json({ message: 'Please provide required onboarding information' });
	}
});

// DELETE /api/onboarding/:id endpoint - Functional!
router.delete('/:id', (req, res) => {
	Onboarding.remove(req.params.id)
		.then((count) => {
			if (count) {
				res.status(200).json({ message: 'The story has been deleted' });
			} else {
				res.status(404).json({ message: 'Invalid story ID' });
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Error deleting the story' });
		});
});

const processBool = (boolValue) => {
	return boolValue === 1 || boolValue === true
		? true
		: boolValue === 0 || boolValue === false
		? false
		: null;
};

module.exports = router;
