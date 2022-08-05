const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Collections
const { Post, validatePost } = require('../models/Post');

// Middleware
const validate = require('../middleware/validate.middleware');

const router = express.Router();

// General error handler
router.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

router.use(bodyParser.json());

// GET /
router.get('/', [], async (req, res) => {
    res.send('For now, not sending a front-end page. This server will be for API only until front-end finished.')
});

// GET /posts
router.get('/posts', [], async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
});

// POST /posts
router.post('/posts', [validate(validatePost)], async (req, res) => {
    let post = new Post({
        title: req.body.title,
        body: req.body.body
    });

    post = await post.save();
    res.send(post);
});

module.exports = router;