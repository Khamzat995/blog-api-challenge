const Post = require('../models/Post')

const deletePost = async (req,res)=>{
    try {
      const deletePost = await Post.findById(req.params.id);
      deletePost.delete()
      res.json('Пост удален')
    }catch (e){
      console.log(e.message)
    }
}

module.exports = deletePost