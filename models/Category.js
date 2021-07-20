const mongoose = require("mongoose"); // подключение mongoose

const categorySchema = new mongoose.Schema({
  // создание модели
  title: {
    // заголовок
    type: String, // тип строка
    required: true, // обязательна к запонению
  },
  quantity: {
    //количество
    type: Number, // тип число
    default: 0, // обязательна к запонению
  },
});

module.exports = mongoose.model("Category", categorySchema); // экспорт модели
