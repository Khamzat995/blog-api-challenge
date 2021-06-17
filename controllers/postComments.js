const Comment = require('../models/Comment')

const postComments = async (req, res) => {
    try {
        const comment = await new Comment({
            authorComment: req.body.authorComment,
            text: req.body.text,
            postId: req.params.id,
        });
        comment.save();
        res.json("success added");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = postComments


