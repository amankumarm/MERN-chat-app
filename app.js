const express=require('express')
const mongoose=require('mongoose')
const authrouter=require('./routers/auth')
const passport=require('passport')
const Csession=require('cookie-session')
const profierouter=require('./routers/user')
const { response } = require('express')
const app= express()
const http=require('http').createServer(app)
const port = 5000 
const io=require('socket.io')(http)






//database setup
const dbUrl="mongodb+srv://user1:user1@node.bczjx.mongodb.net/nodetest?retryWrites=true&w=majority"
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((res)=>{console.log("connected");http.listen(5000)})
.catch((err)=>console.log(err))

    


app.use(Csession({
    keys:["amankumar"],
    maxAge:100000
}))
app.use(passport.initialize())
app.use(passport.session())

const passportconfig=require('./passport-config/passport-conig')
    


var roomnumber=123456;

io.on('connection',socket => {
        var room;
        socket.on('joined',data =>{
                room=data;
                socket.join(data)
        })

        socket.on('setusername',data=>{
            console.log(data)
        })  
        
        socket.on('ms',data =>{
            console.log('message recived'+` ${data}`)
            io.in(room).emit('mr',data)

        })

        // console.log("a user connected")

    })






    //view setup
    app.set('view engine','ejs')
    app.set('views','templates')
    

//static    
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


//external routes
app.use('/auth',authrouter)
app.use('/profile',profierouter)




app.get('/',(req,res)=>{
    // res.render('home',{user:req.user})
    res.render('chat')
    // res.end()
})


app.get('/test',(req,res)=>{
    res.render('home',{user:req.user})
})
 
app.get('/test2',(req,res)=>{
    res.render('all')
})



 


