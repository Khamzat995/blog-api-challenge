const Comment = require("../models/Comment");

const postComments = async (req, res) => {
  try {
    const comment = await new Comment({
      authorComment: req.body.authorComment,
      text: req.body.text,
      postId: req.params.id,
    });
    comment.save();
    res.json("Комментарий добавлен");
  } catch (e) {
    console.log(e);
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({}, { text: true, postId: req.params.id });
    res.json(comments);
  } catch (e) {
    console.log(e);
  }
};

const patchComments = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    comment.save();
    res.json("comment changed");
  } catch (error) {
    console.log(error.message);
  }
};

const deleteComments = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    comment.delete();
    res.json("comment delete");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { postComments, getComments, patchComments, deleteComments };
