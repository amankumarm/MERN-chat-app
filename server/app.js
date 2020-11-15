const express=require('express')
const bodyparser=require('body-parser')
const http=require('http')

const app = express();

var server=app.listen(process.env.PORT || 5000)
const {findall,create_user}=require('./controls/dbactions')

//db
const mongoose=require('mongoose')
const {dburl}=require('./keys') 
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
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



app.post('/update-messages',(req,res)=>{
    const body=req.body
    const updateinstance=Messages.findOneAndUpdate({userid:body.userid},{conversations:["badal gaya be"]},(err,result)=>{
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
    .th
 
})


app.post('/create-user',(req,res)=>{
    create_user(req.body.newuserid)
    console.log("missopn passed")

})