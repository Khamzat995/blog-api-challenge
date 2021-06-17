const Category = require("../models/Category");

const patchCategory = async (req, res) => {
  try {
    const blog = await Category.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    await blog.save();
    res.json("Категория успешно изменена");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = patchCategory

