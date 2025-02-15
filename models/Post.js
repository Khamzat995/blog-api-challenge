const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
  categoriesId: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Post", postSchema);
