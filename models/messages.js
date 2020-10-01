const mongoose=require('mongoose')
const Schema=mongoose.Schema

const messageschema=new Schema({
    room_id:{
        type:Number,
        required:true
    },
    messages:{
        type:Array,
        required:true
    }
})  

const Messages=mongoose.model('Message',messageschema)

module.exports=Messages