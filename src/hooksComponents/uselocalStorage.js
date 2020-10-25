import { useState,useEffect } from "react";

const PREFIX='chat-app-'

export default function useLocalStorage(key,initialvalue){

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
    },[prefixedkey,value])


    return [value,setvalue]


}