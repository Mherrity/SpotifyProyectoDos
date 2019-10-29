import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login'
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'




ReactDOM.render(
    <Router>
     <Route exact path ='/' component = {App}/>
     <Route exact path ='/callback' component = {Login}/>
    </Router>
    
    , document.getElementById('root'));


