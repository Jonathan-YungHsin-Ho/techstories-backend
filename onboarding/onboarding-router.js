const express = require('express');

const Onboarding = require('./onboarding-model');

const router = express.Router();

router.get('/', (_req, res) => {
	res.json({ message: 'Hello World from GET /api/onboarding endpoint!' });
});

module.exports = router;
