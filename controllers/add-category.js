const Category = require('../models/Category') // подключение модели Category

const postCategory = async (req, res) => { // объявление функции
  try {     //
    const blog = await new Category({ // создание константы равной модели Category
      title: req.body.title,  // добавление значения в тело заголовка
      quantity: req.body.quantity, // добавление значения в тело количества
    });
    blog.save();//
    res.json("Новая категория успешно добавлена."); // сообщение о подключении
  } catch (e) {  //перехват ошибки
    console.log(e.message); // сообщение об ошибке
  }
};

module.exports = postCategory // экспорт функции