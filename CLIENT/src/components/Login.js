import React,{useRef} from 'react'
import { Container,Form,Button  } from "react-bootstrap";
import { v4 as uuid } from "uuid"
import axios from "Axios";
function Login({idupdate}) {
    const idref = useRef()
    function handleSubmit(e){
    e.preventDefault()
    axios.post('/validateuser/',{userid:idref.current.value})
    .then(resp=>{
        if (resp.data.length>0) {
            // localStorage.setItem('chat-app-conversations')
            idupdate(idref.current.value)
        }
    })

    .catch(err=>console.log)
    }

    function createhandler(){
        var newuserid=uuid()
        axios.post('/create-user',{newuserid})
        .then()
        .catch(err=>console.log(err.data))
        idupdate(newuserid)
    }
    return (
       <Container className='align-items-center d-flex' style={{height:'100vh'}}>
           <Form onSubmit={handleSubmit} className="w-100">
               <Form.Group>
                   <Form.Label>Enter Your Id </Form.Label>
                   <Form.Control type="text" ref ={idref} required></Form.Control>
               </Form.Group>
               <Button type="submit" className="mr-2" >Login</Button>
               <Button variant="secondary" onClick={createhandler}>Create a New Id</Button>
           </Form>
       </Container>
    )
}

export default Login

