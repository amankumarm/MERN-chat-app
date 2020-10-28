import React,{useContext} from 'react'
import UseLocalStorage from '../hooksComponents/uselocalStorage'

const ContactsContext=React.createContext()


export function UseContacts(){
    return useContext(ContactsContext)
}


export function ContactsProvider({children}) {
    const [contacts, setContacts] = UseLocalStorage('contacts',[])

    function createContacts(id,name){
        setContacts(pc=>{return [...pc,{id,name}]})
    }
    
    return (
        <ContactsContext.Provider value={{contacts,createContacts}}>
            {children}
        </ContactsContext.Provider>
    )
}


