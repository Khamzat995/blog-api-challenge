const {getAllCategory, getAllCategoryById} = require('./getAllCategory')
const getCommetns = require('./getComments')
const deleteCategory = require('./deleteCategory')
const deleteComments = require('./deleteComments')
const patchCategory = require('./patchCategory')
const patchComments = require('./patchComments')
const postCategory = require('./postCategory')
const postComments = require('./postComments')
const {
    getAllPosts,
    getPostsById,
    getCategoryPost
}= require('./getPosts')
const postPosts = require('./postPosts')
const deletePosts = require('./deletePosts')
const patchPosts = require('./patchPosts')

module.exports = {
    getAllCategory,
    getAllCategoryById,
    getCommetns,
    deleteCategory,
    deleteComments,
    patchCategory,
    patchComments,
    postCategory,
    postComments,
    getAllPosts,
    getPostsById,
    getCategoryPost,
    postPosts,
    deletePosts,
    patchPosts
}
