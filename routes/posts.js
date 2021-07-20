const { Router } = require("express");
const router = Router();
const {
  getAllPosts,
  getPostsById,
  getCategoryPost,
  postPosts,
  patchPost,
  deletePost,
} = require("../controllers/all-posts");

router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostsById);
router.get("/categories/:id/posts", getCategoryPost);
router.post("/posts", postPosts);
router.delete("/posts/:id", deletePost);
router.patch("/posts/:id", patchPost);

module.exports = router;
