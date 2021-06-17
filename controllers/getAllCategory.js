const Category = require('../models/Category')

const getAllCategory = async (req, res) => {
  const blogs = await Category.find({}, { name: true, price: true });
  res.json(blogs);
};

const  getAllCategoryById = async (req, res) => {
  const  blog = await Category.findById(req.params.id);
  res.json(blog);
};

module.exports = {
  getAllCategory,
  getAllCategoryById,
};

