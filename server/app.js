const express=require('express')
const bodyparser=require('body-parser')
const http=require('http')

const app = express();

var server=app.listen(process.env.PORT || 5000)
const {
    findall,
    create_user,
    get_user_messages,
    update_contacts,
    update_conversations

}=require('./controls/dbactions')

//db
const mongoose=require('mongoose')
const {dburl}=require('./keys') 
mongoose.connect(dburl,{ useFindAndModify: false ,useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{console.log('connected');})
.catch((err)=>console.log(err))


const Messages=require('./models/Messages')



const io=require('socket.io')(server)



// express setup
app.set('view engine', 'ejs')
app.set('views','templates')
app.use(express.static('static'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))






// io.origins('*:*')
io.on('connection',socket=>{
    const id=socket.handshake.query.id
    socket.join(id)

    socket.on('send-message',({recipients,text})=>{
        recipients.forEach(element => {
            const newRecipents=recipients.filter(r=>r!==element)
            newRecipents.push(id)
            socket.broadcast.to(element).emit('recieve-message',{
                recipients:newRecipents,sender:id,text
            })
        });
    })
})

app.get('/',(req,res)=>{
    res.render('index');


})
app.get('/gm',(req,res)=>{
console.log('req came')
res.json(req.body)
res.end()
})

app.post('/validateuser',(req,res)=>{
    const body=req.body
    console.log(body)
    Messages.findOne({userid:body.userid})
    .then(resp=>{
        // console.log(resp)
        if (resp){
            res.json(resp)
        }
    })
})

app.get('/get-messages',(req,res)=>{
    const body=req.body
    get_user_messages(body.userid)
    res.end()
    

})


app.post('/update-messages',(req,res)=>{
    const body=req.body
   update_conversations(body)
   res.end()
 
})


app.post('/create-user',(req,res)=>{
    create_user(req.body.newuserid)

})


app.post('/update-contacts',(req,res)=>{
console.log("update-contatcs called")
const after = update_contacts(req.body)
console.log(after)
res.end()
})



app.get('/test-api',(req,res)=>{
    Messages.find()
    .then(resp=>{
        console.log(resp)
        res.json(resp)
    })
    .catch(err=>console.log(err))

})