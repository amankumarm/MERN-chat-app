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

const get_user_messages=(id)=>{
    const user_messages=Messages.find({userid:id})
    .then(res=>{
        console.log(res)
    })
    .catch(err=>console.log(err))
}

const update_contacts=async ({userid,contacts})=>{

    const after =await  Messages.findOneAndUpdate({userid},{contacts})
    await after.save()
    return     
}


const update_conversations=async ({userid,conversations})=>{

    const after=await Messages.findOneAndUpdate({userid},{messages:conversations})
    await after.save()
    return 
}

module.exports={
    Messages,
    findall,
    get_user_messages,
    update_contacts,
    update_conversations,
    create_user

}

