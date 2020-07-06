const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const OnboardingRouter = require('../onboarding/onboarding-router');
const InternshipRouter = require('../internship/internship-router');
const FirstJobSearchRouter = require('../first-job-search/first-job-search-router');
const CodeReviewRouter = require('../code-review/code-review-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/onboarding', OnboardingRouter);
server.use('/api/internship', InternshipRouter);
server.use('/api/firstJobSearch', FirstJobSearchRouter);
server.use('/api/codeReview', CodeReviewRouter);

server.get('/', (_req, res) => {
	res.json({ message: 'Hello World from TechStories Backend API!' });
});

module.exports = server;
