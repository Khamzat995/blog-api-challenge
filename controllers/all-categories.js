const Category = require("../models/Category"); // подключение модели Category

const getAllCategory = async (req, res) => {
  const categories = await Category.find({}, { title: true, quantity: true }); // создание константы
  res.json(categories); // ответ в формате json
};

const getAllCategoryById = async (req, res) => {
  const category = await Category.findById(req.params.id); // создание константы
  res.json(category); // ответ в формате json
};

const postCategory = async (req, res) => {
  try {
    const blog = await new Category({
      title: req.body.title, // добавление значения в тело заголовка
    });
    blog.save(); //
    res.json("Новая категория успешно добавлена."); // сообщение о подключении
  } catch (e) {
    console.log(e.message); // сообщение об ошибке
  }
};

const patchCategory = async (req, res) => {
  try {
    const blog = await Category.findOneAndUpdate(
      { _id: req.params.id }, // поиск элемента по ID
      { ...req.body } // меняет в теле только то, что пришло
    );
    await blog.save(); // сохранение изменений к константе blog
    res.json("Категория успешно изменена"); // сообщение о поиске
  } catch (e) {
    console.log(e.message); // сообщение об ошибке
  }
};

const deleteCategory = async (req, res) => {
  try {
    const blog = await Category.findById(req.params.id); // создание константы по модели Category
    blog.delete(); // удаление констаты
    res.json("Категория успешно удалена"); // вывод сообщения о проделанной операции
  } catch (e) {
    console.log(e.message); // вывод сообщения об ошибке
  }
};

module.exports = {
  getAllCategory,
  getAllCategoryById,
  postCategory,
  patchCategory,
  deleteCategory,
};
