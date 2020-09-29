const router = require('express').Router()




router.get('/',(req,res)=>{
    // res.render('dashboard',{user:req.user})
    console.log(req.user)
    res.end()

})


module.exports=router


