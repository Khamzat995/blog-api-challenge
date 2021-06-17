const {getAllCategory, getAllCategoryById} = require('./get-all-category')
const getCommetns = require('./get-comments')
const deleteCategory = require('./delete-category')
const deleteComments = require('./delete-comments')
const patchCategory = require('./change-category')
const patchComments = require('./change-comments')
const postCategory = require('./add-category')
const postComments = require('./add-comments')
const {
    getAllPosts,
    getPostsById,
    getCategoryPost
}= require('./get-posts')
const postPosts = require('./add-posts')
const deletePosts = require('./delete-posts')
const patchPosts = require('./change-posts')

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
