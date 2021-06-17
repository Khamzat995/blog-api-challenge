const { Router } = require('express')
const posts = require('../models/Post')
const router = Router()

router.get('./posts', async (req, res)=>{
  const allPosts = await posts.find();
  res.json(allPosts)
});
router.get('/posts/:id', async (req, res) =>{
  const postById = await posts.findById(req.params.id);
  res.json(postById);
});
router.get('/categories/:id/posts', async (req, res) =>{
  const categoriesPosts = await posts.find()
  res.json(categoriesPosts);
});
router.post('/posts', async (req, res)=>{
  try {
    const post = await new posts({
      title: req.body,
      text: req.body,
      date: req.body,
      author: req.body,
      categoriesId: req.body,
    })
    await post.save();
    res.json('Пост добавлен')
  }catch (e){
    console.log(e.message)
  }
});
router.delete('/posts/:id', async (req,res)=>{
  try {
    const deletePost = await posts.findById(req.params.id);
    deletePost.delete()
    res.json('Пост удален')
  }catch (e){
    console.log(e.message)
  }
});
router.patch('/posts/:id', async (req, res) =>{
  try {
    await posts.updateOne(req.params.id, {
      $set: {
        ...req.body
      }
    })
  }catch (e){
    console.log(e.message)
  }res.json("Пост изменен")
})

module.exports = router