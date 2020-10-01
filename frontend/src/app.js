import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Sidebar from './components/sidebar';
import ChatSection from "./components/chatsection";
import'./componentstyles/app.css'
class App extends Component {
    render() {
        return (
            <div className="app_outer">
                <Sidebar />
               
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("root"));
