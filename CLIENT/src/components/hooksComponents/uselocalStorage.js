import { useState,useEffect } from "react";
import axios from "Axios";

const PREFIX='chat-app-'

export default function useLocalStorage(key,initialvalue,id){

const prefixedkey=PREFIX+key
const [value,setvalue] = useState(()=>{
    const jsonvalue=localStorage.getItem(prefixedkey)
    if(jsonvalue!=null){
        return JSON.parse(jsonvalue)
    }                                                                     //fetch user infos here and maybe add it to Contexts
    if (typeof initialvalue==='function'){
        return initialvalue()
    }
    else{
        return initialvalue
    }
})

    useEffect(()=>{
        localStorage.setItem(prefixedkey,JSON.stringify(value))

        if (key==='contacts') {
            const c=localStorage.getItem(prefixedkey)
                axios.post('/update-contacts/',{userid:id,contacts:JSON.parse(c)})
                .then(res=>{console.log(res)})
                .catch(err=>{console.log(err)})            
        } else if(key==='conversations') {
            const c=localStorage.getItem(prefixedkey)
                axios.post('/update-messages/',{userid:id,conversations:JSON.parse(c)})
                .then(res=>{console.log(res)})
                .catch(err=>{console.log(err)})
        }
        

    },[prefixedkey,value])


    return [value,setvalue]


}