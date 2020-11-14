const express=require('express')
const http=require('http')

const app = express();

const server=app.listen(5000,()=>console.log("started"))
const io=require('socket.io')(server)



app.set('view engine', 'ejs')
app.set('views','templates')

app.use(express.static('static'))
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