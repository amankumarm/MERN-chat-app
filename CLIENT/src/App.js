import React from 'react';
import GlobalStyle from './globalStyles';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import {Navbar} from './components';
import Featurepage from './pages/HomePage/Featurepage';
import Aboutpage from './pages/HomePage/Aboutpage';
import GetStartedPage from './pages/HomePage/GetStartedPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mapp from "./mapp";
import Endcall from "./components/endcall";
import Page404 from "./components/atoms/404";
import "regenerator-runtime/runtime.js";


function App() {
  return (
    <div className="App">
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route path="/chat" exact component={Mapp} />
        <Route path="/" exact  >
          <Navbar/>
          <Home />
        </Route>
        <Route path="/features" exact>
          <Navbar/>
          <Featurepage />
        </Route>
        <Route path="/about-us" exact>
          <Navbar/>
          <Aboutpage />
        </Route>
        <Route path="/sign-up" exact >
          <Navbar/>
          <GetStartedPage />
        </Route>
        <Route exact >
        <Page404 />
        </Route>

      </Switch>
    </Router>
      
      

    </div>
  );
}


export default App;

