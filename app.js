const express=require('express')
const mongoose=require('mongoose')
const authrouter=require('./routers/auth')
const messagesrouter=require('./routers/messages')
const profierouter=require('./routers/user')
const passport=require('passport')
const Csession=require('express-session')
const app= express()
const http=require('http').createServer(app)
const port = 5000 
const io=require('socket.io')(http)
const expresssession=Csession({
    secret:"aman",
    resave:false,
    saveUninitialized:false
})





//database setup
const dbUrl="mongodb+srv://user1:user1@node.bczjx.mongodb.net/nodetest?retryWrites=true&w=majority"
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((res)=>{console.log("connected");})
.catch((err)=>console.log(err))

http.listen(5000)                                                                                                             // add this inside mongo .then for db related stuff 

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);    

app.use(expresssession)
app.use(passport.initialize())
app.use(passport.session())

const passportconfig=require('./passport-config/passport-conig')
const User = require('./models/user')
var roomnumber=123456;

io.use(function(socket,next){
    expresssession(socket.request,{},next)
})

io.on('connection',socket => {
    var user=socket.request.session.passport
    user ? console.log(user) : console.log("44")    

    var room;
        socket.on('joined',data =>{
                room=data;
                socket.join(data)
                // console.log("data"+data)
        })
        
        socket.on('ms',data =>{
            console.log('message recived'+` ${data}`)
            socket.broadcast.emit('mr',data)

        })
        socket.emit('test',user)
        // console.log("a user connected")

    })





    
//view setup
app.set('view engine','ejs')
app.set('views','templates')
    

//static    
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//external routes
app.use('/auth',authrouter)
app.use('/profile',profierouter)
app.use('/messages',messagesrouter)




app.get('/',(req,res)=>{
    res.render('home',{user:req.user})
    User.find()
    .then((res)=> console.log(res))
    .catch(err=>console.log(err))    
     
    // res.render('chat')
    // res.end()
})


app.get('/test',(req,res)=>{
    res.render('chat',{user:req.user})
})
 
app.get('/test2',(req,res)=>{
    res.render('all')
})



 


