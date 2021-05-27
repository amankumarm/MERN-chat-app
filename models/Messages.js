const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const messagesschema=new Schema({
    userid:{
        type:String,
        // // required:true
    },
    contacts:{
        type:Array,
        // required:true
    },
    messages:{
        type:Array,
        // required:true
    }
})


const Messages=mongoose.model('Chat',messagesschema)
module.exports=Messages