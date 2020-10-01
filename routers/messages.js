const router = require('express').Router()
const Msg=require('../models/messages')


router.get('/:room_id',(req,res)=>{
    id=Number(req.params.room_id)
    Msg.findOne({room_id:id})
    .then((result) =>{ 
        res.json(result);
        res.end()
    })
    .catch(err=>console.log(err)) 
})

router.post('/:room_id',(req,res)=>{
    const room_id=req.params.room_id

})


module.exports=router