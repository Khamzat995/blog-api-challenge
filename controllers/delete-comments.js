const Comment = require('../models/Comment')

const deleteComments = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        comment.delete()
        res.json("Success delete");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = deleteComments