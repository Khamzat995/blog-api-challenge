const { Router } = require("express");
const User = require("../models/User");
const router = Router();

router.get('/users', async(req,res)=>{
    const users = await User.find()
    res.json(users)
})

router.get('/users/:id', async(req,res)=>{
    const user = await User.findById(req.params.id)
    res.json(user)
})

router.post('/users', async(req,res)=>{
    const user = await new User({
        name: req.body.name,
        email: req.body.email
    })
    user.save()
    res.json('added user')
})

module.exports = router