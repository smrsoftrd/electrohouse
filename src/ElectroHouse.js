import React from 'react';
import logo from './logo.svg';
import Login from './Component/Login';
import './App.css';
import { BrowserRouter,Route, NavLink, Switch} from "react-router-dom";

function ElectroHouse() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sistema de Gestión de Inventario          
        </p>

        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact/>          
            <Route path="/login" component={Login}/>          
          </Switch>
        </BrowserRouter>

      </header>      
    </div>
  );
}

export default ElectroHouse;
