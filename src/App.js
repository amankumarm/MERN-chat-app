import React from "react";
import Login from "./components/Login";
import useLocalStorage from "./components/hooksComponents/uselocalStorage";
import Dashboard from "./components/Dashboard";
import {ContactsProvider} from './components/contexts/contactsProvider'
function App() {
  const [id, setId]=useLocalStorage('id')
  
  const dashboard=(
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
    
  )
  
  
  return (

    <div className="App">
      {id ?  dashboard :<Login idupdate={setId}/>}

    </div>
  );
}

export default App;
