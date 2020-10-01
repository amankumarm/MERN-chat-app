const router = require('express').Router()
const User= require('../models/user')



router.get('/getuserinfo',(req,res)=>{
    // res.render('dashboard',{user:req.user})
    const userobj=req.user
    if(userobj){
        // res.send(userobj)
        res.json(userobj)
        res.end()
    }
    else{
        res.redirect('/login')
    }

})

router.get('/getuserinfo',(req,res)=>{
    
})

module.exports=router


