const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
	res.send('we are on posts');
});

router.post('/', (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
	});
	post.save()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;
