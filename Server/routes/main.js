const express = require('express');
const path = require('path');

// Collections
const { Post, validatePost } = require('./models/Post');

// Middleware
const validate = require('./middleware/validate.middleware');

const router = express.Router();

router.get('/', [], async (req, res) => {
    res.send('For now, not sending a front-end page. This server will be for API only until front-end finished.')
});

router.get('/posts', [], async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
});

router.post('/posts', [validate(validatePost)], async (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body
    });

    post = await post.save();
    res.send(post);
});

module.exports = router;