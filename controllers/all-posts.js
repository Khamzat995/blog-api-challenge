const Post = require("../models/Post");
const Category = require("../models/Category");

const getAllPosts = async (req, res) => {
  const allPosts = await Post.find({}, { title: true, text: true });
  res.json(allPosts);
};

const getPostsById = async (req, res) => {
  const postById = await Post.findById(req.params.id);
  res.json(postById);
};

const getCategoryPost = async (req, res) => {
  const categoriesPosts = await Post.find({ categoriesId: req.params.id });
  res.json(categoriesPosts);
};

const postPosts = async (req, res) => {
  try {
    const post = await new Post({
      title: req.body.title,
      text: req.body.text,
      author: req.body.author,
      categoriesId: req.body.categoriesId,
    });
    const cat = await Category.findOne({ _id: req.body.categoriesId });
    cat.quantity += 1;
    await post.save();
    res.json("Пост добавлен");
  } catch (e) {
    console.log(e.message);
  }
};

const patchPost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    post.save();
    res.json("Пост изменен");
  } catch (e) {
    console.log(e.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const deletePost = await Post.findById(req.params.id);
    deletePost.delete();
    res.json("Пост удален");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getAllPosts,
  getPostsById,
  getCategoryPost,
  postPosts,
  patchPost,
  deletePost,
};
