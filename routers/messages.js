const router = require('express').Router()
const msg=require('../models/messages')
router.get('/:room_id',(req,res)=>{
    const room_id=req.params.room_id
                                                                        //to be implimented
})

router.post('/:room_id',(req,res)=>{
    const room_id=req.params.room_id
                                                                        //to be implimented
})


module.exports=router