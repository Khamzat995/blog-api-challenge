const { Router } = require("express");
const Post = require("../models/Post");
const router = Router();
const {
    getAllPosts,
    getPostsById,
    getCategoryPost,
    deletePosts,
    postPosts,
    patchPosts
} = require("../controllers/index");

router.get("./posts", getAllPosts);

router.get("/posts/:id", getPostsById);

router.get("/categories/:id/posts", getCategoryPost);

router.post("/posts", postPosts);

router.delete("/posts/:id", deletePosts);

router.patch("/posts/:id", patchPosts);

module.exports = router;
