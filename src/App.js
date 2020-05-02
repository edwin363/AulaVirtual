import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./components/Login";
import Menu from "./components/Menu";

function App() {
  return (
    <Provider store={store}>    
    <Menu/>
      <div className="App container ">
        <div className="card col-5 bg-dark border border-success">
        <div className="row-6">
          <div className="col">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col">
            <Login/>
          </div>
        </div>  
        </div> 
      </div>
    </Provider>
  );
}

export default App;
