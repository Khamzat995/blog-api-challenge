const Comment = require('../models/Comment')

const getComments = async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
}

module.exports = getComments