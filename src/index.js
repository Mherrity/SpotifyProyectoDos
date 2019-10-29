import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login'
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


//import OAuth from './auth-server/authorization_code/public/index'
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Router>
     <Route exact path ='/' component = {App}/>
     <Route exact path ='/callback' component = {Login}/>
    </Router>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
