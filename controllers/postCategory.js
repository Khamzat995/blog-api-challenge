const Category = require('../models/Category')

const postCategory = async (req, res) => {
  try {
    const blog = await new Category({
      title: req.body.title,
      quantity: req.body.quantity,

    });
    blog.save();
    res.json("Новая категория успешно добавлена.");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = postCategory