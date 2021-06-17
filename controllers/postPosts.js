const Post = require('../models/Post')

const postPosts = async (req, res)=>{
    try {
      const post = await new Post({
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        categoriesId: req.body.categoriesId,
      })
      await post.save();
      res.json('Пост добавлен')
    }catch (e){
      console.log(e.message)
    }
};

module.exports = postPosts
