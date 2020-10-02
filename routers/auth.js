const passport=require('passport')
const router=require('express').Router()





router.get('/',(req,res)=>{
    res.render('login')
})

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}))

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    // console.log(req.user)
    res.redirect('/test2')
})
module.exports=router