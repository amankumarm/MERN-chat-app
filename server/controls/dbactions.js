const Messages=require('../models/Messages')


const findall=()=>{
Messages.find()
.then(res=>{
    console.log(res)
})
.catch(err=>console.log(err))
}

const create_user=(newuserid)=>{

    const newuserinstance=new Messages({
        userid:String(newuserid),
        contacts:[],
        conversations:[]
    })
    newuserinstance.save()

}


module.exports={
    Messages,
    findall,
    create_user

}

