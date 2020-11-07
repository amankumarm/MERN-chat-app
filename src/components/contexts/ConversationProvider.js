import React,{ useContext,useState }  from 'react'
import UseLocalStorage from '../hooksComponents/uselocalStorage'
import { UseContacts } from './contactsProvider'

const ConversationsContext=React.createContext()

export function UseConversations(){
    return useContext(ConversationsContext)
}


export function ConversationsProvider({id,children}) {
    const {contacts}=UseContacts()
    const [selectConversationIndex,setselectConversationIndex] = useState(0)
    const [conversations, setConversations] = UseLocalStorage('conversations',[])

    function createConversation(recipients){
        setConversations(pc=>{return [...pc,{recipients,messages:[] }]})
    }
    
    const formattedConversation = conversations.map((convo,index) =>{
        const recipients = convo.recipients.map(recip =>{
            const contact = contacts.find(contact =>{
                return contact.id === recip
            })
            const name = (contact && contact.name) || recip

            return {id:recip,name}
        })


        const messages = convo.messages.map(message=>{
            const contact = contacts.find(contact=>{
                return contact.id===message.sender
            })
            const name= (contact && contact.name) || message.sender
            const fromme=id===message.sender
            return {...message,senderName:name,fromme}
        })


        const selected=index===selectConversationIndex
        return {...convo,messages,recipients,selected}
    })

    

    function addMessageToConversation({recipients,text,sender}){


        setConversations(prevConvo=>{
            let madeChange = false
            const newMessage = { sender,text}
            const newConversation=prevConvo.map(conversation =>{
                if (arrayEquality(conversation.recipients,recipients)) {
                    madeChange=true
                    return {...conversation,
                            messages:[...conversation.messages,newMessage]}
                }
                return conversation

            })
            if(madeChange){
                return newConversation 
            }
            else{
                return [...prevConvo,{recipients,messages:[newMessage]}]
            }
        })
    }

    function sendMessage(recipients,text){
        addMessageToConversation({recipients,text,sender:id})
    }





    const value={
        conversations:formattedConversation,
        selectedConversation:formattedConversation
        [selectConversationIndex],
        sendMessage,
        createConversation,
        setselectConversationIndex:setselectConversationIndex
    }
    return (
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>
    )
}


function arrayEquality(a,b){
    if (a.length!==b.length) {
        return false
    }

    a.sort()
    b.sort()

    return a.every((item,index)=>{
        return item === b[index]
    })
}