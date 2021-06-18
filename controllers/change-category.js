const Category = require("../models/Category"); // подключение модели Category

const patchCategory = async (req, res) => { // объявление функции
  try {
    const blog = await Category.findOneAndUpdate( // создание константы равной модели Category
      { _id: req.params.id }, // поиск элемента по ID
      { ...req.body } // меняет в теле только то, что пришло
    );
    await blog.save(); // сохранение изменений к константе blog
    res.json("Категория успешно изменена"); // сообщение о поиске
  } catch (e) { //перехват ошибки
    console.log(e.message);  // сообщение об ошибке
  }
};

module.exports = patchCategory // экспорт функции