const express = require('express');

const Internship = require('./internship-model');

const helper = require('../utilities/helper-functions');

const router = express.Router();

// GET /api/internship endpoint
router.get('/', (_req, res) => {
	Internship.find()
		.then((stories) => {
			const updatedStories = stories.map((story) => {
				return {
					...story,
					mentorProvided: helper.processBool(story.mentorProvided),
					positiveInternship: helper.processBool(story.positiveInternship),
					positionOffered: helper.processBool(story.positionOffered),
				};
			});
			res.status(200).json(updatedStories);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Failed to get Internship stories' });
		});
});

// POST /api/internship endpoint
router.post('/', (req, res) => {
	const story = req.body;

	if (story.experience) {
		Internship.add(story)
			.then((saved) => {
				saved.mentorProvided = helper.processBool(saved.mentorProvided);
				saved.positiveInternship = helper.processBool(saved.positiveInternship);
				saved.positionOffered = helper.processBool(saved.positionOffered);
				res.status(201).json({ internship: saved });
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({ message: 'Error adding Internship story' });
			});
	} else {
		res
			.status(400)
			.json({ message: 'Please provide required Internship information' });
	}
});

// DELETE /api/internship endpoint
router.delete('/:id', (req, res) => {
	Internship.remove(req.params.id)
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

// const processBool = (boolValue) => {
// 	return boolValue === 1 || boolValue === true
// 		? true
// 		: boolValue === 0 || boolValue === false
// 		? false
// 		: null;
// };

module.exports = router;
