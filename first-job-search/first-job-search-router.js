const express = require('express');

const FirstJobSearch = require('./first-job-search-model');

const router = express.Router();

// GET /api/firstJobSearch - Functional!
router.get('/', (_req, res) => {
	FirstJobSearch.find()
		.then((stories) => {
			res.status(200).json(stories);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Failed to get job search stories' });
		});
});

// POST /api/firstJobSearch - Functional!
router.post('/', (req, res) => {
	const story = req.body;

	if (story.experience) {
		FirstJobSearch.add(story)
			.then((saved) => {
				res.status(201).json({ firstJobSearch: saved });
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({ message: 'Error adding job search story' });
			});
	} else {
		res
			.status(400)
			.json({ message: 'Please provide required job search information' });
	}
});

// PUT /api/firstJobSearch - Functional!
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	FirstJobSearch.findById(id)
		.then((story) => {
			if (story) {
				FirstJobSearch.update(changes, id).then((updated) => {
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

// DELETE /api/firstJobSearch - Functional!
router.delete('/:id', (req, res) => {
	FirstJobSearch.remove(req.params.id)
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
