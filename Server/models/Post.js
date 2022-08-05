const Joi = require('joi');
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
});

const Post = mongoose.model("Post", schema, 'posts');

exports.Post = Post;
exports.validatePost = function(post) {
    const schema = Joi.object({
        title: Joi.string().required(),
        body: Joi.string().required(),
    });

    return Joi.assert(post, schema);
}
