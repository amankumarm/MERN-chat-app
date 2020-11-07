import React from "react";
import Login from "./components/Login";
import useLocalStorage from "./components/hooksComponents/uselocalStorage";
import Dashboard from "./components/Dashboard";
import { ContactsProvider } from './components/contexts/contactsProvider'
import { ConversationsProvider } from "./components/contexts/ConversationProvider";
function App() {
  const [id, setId]=useLocalStorage('id')
  
  const dashboard=(
    <ContactsProvider>
    <ConversationsProvider id={id}>
      <Dashboard id={id} />
    </ConversationsProvider>
    </ContactsProvider>
    
  )
  
  
  return (

    <div className="App">
      {id ?  dashboard :<Login idupdate={setId}/>}

    </div>
  );
}

export default App;
