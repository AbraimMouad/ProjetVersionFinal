import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/logo.png"
import Affichage from "./components/AffichageTodo";
import Modifie from "./components/ModifieTodo";
import Ajouter from "./components/AjouterTodo";
import Login from './components/Login/Login';
import ListUsers from './components/ListUsers';


class App extends React.Component{
  render(){
    return (
      <Router>

      
       
        <div className="container">
          <Login></Login>
      
          <Route path="/affichage" exact component={Affichage} />
          <Route path="/edit/:id" component={Modifie} />
          <Route path="/create" component={Ajouter} />
          <Route path="/ListUsers" component={ListUsers} />
          
        </div>
      </Router>
      
    );
  }
}

export default App;
