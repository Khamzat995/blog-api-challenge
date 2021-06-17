const Category = require("../models/Category");

const deleteCategory = async (req, res) => {
  try {
    const blog = await Category.findById(req.params.id);
    blog.delete();
    res.json("Категория успешно удалена");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = deleteCategory