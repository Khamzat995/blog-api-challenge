const { Router } = require("express");
const Comment = require("../models/Comment");
const router = Router();
const {
    getCommetns,
    postComments,
    deleteComments,
    patchComments
} = require('../controllers/index')

router.get("/comments", getCommetns);

router.post("/posts/:id/comments", postComments);

router.delete("/comments/:id", deleteComments);

router.patch("/comments/:id", patchComments);

module.exports = router;
