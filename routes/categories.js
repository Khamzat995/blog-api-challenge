const { Router } = require('express')
const router = Router()
//const Category = require('../models/Category')

const {
  getAllCategory,
  getAllCategoryById,
  postCategory,
  deleteCategory,
  patchCategory
} = require('../controllers/index')

router.get("/categories", getAllCategory);
router.get("/categories/:id", getAllCategoryById);
router.post("/categories", postCategory);
router.delete("/categories/:id", deleteCategory);
router.patch("/categories/:id", patchCategory);

module.exports = router