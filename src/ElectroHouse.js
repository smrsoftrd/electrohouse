import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './login';
import './App.css';

function ElectroHouse() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sistema de Gestión de Inventario
        </p>

        <Router>
          <div>
            <Link className="App-link" to="/login">Ingrese aquí</Link>            
            <Route path="/login" component={Login} />
          </div>
        </Router>
        
      </header>
    </div>
  );
}

export default ElectroHouse;
