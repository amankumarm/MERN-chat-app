import React from "react";
import Login from "./components/Login";
import useLocalStorage from "./components/hooksComponents/uselocalStorage";
import Dashboard from "./components/Dashboard";
import { ContactsProvider } from './components/contexts/contactsProvider'
import { ConversationsProvider } from "./components/contexts/ConversationProvider";
import { SocketProvider } from "./components/contexts/SocketProvider";
function mapp() {
  const [id, setId]=useLocalStorage('id')
  
  
  const dashboard=(
    <SocketProvider id={id}>
      <ContactsProvider id={id} >
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )
  
  
  return (

    <div className="App">
      {id ?  dashboard :<Login idupdate={setId}/>}

    </div>
  );
}

export default mapp;
