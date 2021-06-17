const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  title: {  // заголовок
    type: String,
    required: true
  },
  quantity: { //количество
    type: Number,
    required: true
  }
})

 module.exports = mongoose.model('Category', categorySchema)