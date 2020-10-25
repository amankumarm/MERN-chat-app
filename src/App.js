import React from "react";
import Login from "./components/Login";
import useLocalStorage from "./hooksComponents/uselocalStorage";
import Dashboard from "./components/Dashboard";
function App() {
  const [id, setId]=useLocalStorage('id')
  return (
    <div className="App">
      {id ?  <Dashboard id={id}/>:<Login idupdate={setId}/>}

    </div>
  );
}

export default App;
