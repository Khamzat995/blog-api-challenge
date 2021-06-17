const Post = require('../models/Post')

const getAllPosts = async (req, res)=>{
    const allPosts = await Post.find();
    res.json(allPosts)
}

const getPostsById = async (req, res) =>{
    const postById = await Post.findById(req.params.id);
    res.json(postById);
}

const getCategoryPost = async (req, res) =>{
    const categoriesPosts = await Post.find({categoriesId: req.params.id})
    res.json(categoriesPosts);
}

module.exports = {
    getAllPosts,
    getPostsById,
    getCategoryPost
}