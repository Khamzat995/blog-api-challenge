const Comment = require('../models/Comment')

const patchComments = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(
            { _id: req.params.id },
            { ...req.body }
        );
        comment.save();
        res.json("success changed");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = patchComments