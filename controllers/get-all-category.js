const Category = require('../models/Category'); // подключение модели Category

const getAllCategory = async (req, res) => { // объявление функции
  const blogs = await Category.find({}, { name: true, price: true }); // создание константы
  res.json(blogs); // ответ в формате json
};

const  getAllCategoryById = async (req, res) => { // объявление функции
  const  blog = await Category.findById(req.params.id); // создание константы
  res.json(blog); // ответ в формате json
};

module.exports = {
  getAllCategory, // экспорт функции
  getAllCategoryById, // экспорт функции
};

