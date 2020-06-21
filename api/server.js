const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const OnboardingRouter = require('../onboarding/onboarding-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/onboarding', OnboardingRouter);

server.get('/', (_req, res) => {
	res.json({ message: 'Hello World from TechStories Backend API!' });
});

module.exports = server;
