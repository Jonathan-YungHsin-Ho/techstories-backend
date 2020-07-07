const express = require('express');

const Onboarding = require('./onboarding-model');

const helper = require('../utilities/helper-functions');

const router = express.Router();

// GET /api/onboarding endpoint - Functional!
router.get('/', (_req, res) => {
	Onboarding.find()
		.then((stories) => {
			const updatedStories = stories.map((story) => {
				return {
					...story,
					mentorProvided: helper.processBool(story.mentorProvided),
					positiveOnboarding: helper.processBool(story.positiveOnboarding),
				};
			});
			res.status(200).json(updatedStories);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Failed to get onboarding stories' });
		});
});

// POST /api/onboarding endpoint - Functional!
router.post('/', (req, res) => {
	const story = req.body;

	if (story.experience) {
		Onboarding.add(story)
			.then((saved) => {
				saved.mentorProvided = helper.processBool(saved.mentorProvided);
				saved.positiveOnboarding = helper.processBool(saved.positiveOnboarding);
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

// PUT /api/onboarding/:id endpoint - Functional!
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Onboarding.findById(id)
		.then((story) => {
			if (story) {
				Onboarding.update(changes, id).then((updated) => {
					updated.mentorProvided = helper.processBool(updated.mentorProvided);
					updated.positiveOnboarding = helper.processBool(
						updated.positiveOnboarding,
					);
					res.status(200).json(updated);
				});
			} else {
				res
					.status(404)
					.json({ message: 'Could not find story with provided ID' });
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Error updating the story' });
		});
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

module.exports = router;
