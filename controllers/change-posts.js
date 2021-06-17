const Post = require("../models/Post");

const patchPost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            { _id: req.params.id },
            { ...req.body });
        post.save();
        res.json("Пост изменен");
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = patchPost;
