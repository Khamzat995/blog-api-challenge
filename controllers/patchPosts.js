const Post = require("../models/Post");

const patchPost = async (req, res) => {
    try {
        const post = await Post.updateOne(req.params.id, {
            $set: {
                ...req.body,
            },
        });
        post.save();
        res.json("Пост изменен");
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = patchPost;
