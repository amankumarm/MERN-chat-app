const mongoose=require('mongoose')
const Schema=mongoose.Schema
// console.log(Schema)
const userschema=new Schema({
    username:{
        type:String,
        required:true
    },
    googleid:{
        type:String,
        required:true
    }
})

const User=mongoose.model('User',userschema)
module.exports=User