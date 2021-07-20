const { Router } = require("express");
const router = Router();
const {
  getComments,
  postComments,
  deleteComments,
  patchComments,
} = require("../controllers/all-comments");

router.get("/posts/:id/comments", getComments);
router.post("/comments", postComments);
router.delete("/comments/:id", deleteComments);
router.patch("/comments/:id", patchComments);

module.exports = router;
