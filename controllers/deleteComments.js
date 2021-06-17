const Comment = require('../models/Comment')

const deleteComments = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        res.json("Success delete");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = deleteComments