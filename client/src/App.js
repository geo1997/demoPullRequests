import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/materia/bootstrap.min.css";
import {BrowserRouter as Router , Route} from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Events from './components/Events'
import addEvent from './components/addEvents'
import updateEvent from './components/UpdateEvent'


function App() {
  return (
   <Router>
       <div className="App">
            <NavBar/>

                <Route exact path="/" component={Home}/>


            <div className="container" >
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/events" component={Events}/>
                <Route exact path="/add/event" component={addEvent}/>
                <Route exact path="/edit/:id" component={updateEvent}/>
            </div>

       </div>
   </Router>
  );
}

export default App;
