const Category = require("../models/Category"); // подключение модели Category

const deleteCategory = async (req, res) => { //объявление функции
  try {
    const blog = await Category.findById(req.params.id); // создание константы по модели Category
    blog.delete(); // удаление констаты
    res.json("Категория успешно удалена"); // вывод сообщения о проделанной операции
  } catch (e) { // перехват ошибки
    console.log(e.message); // вывод сообщения об ошибке
  }
};

module.exports = deleteCategory // экспорт функции