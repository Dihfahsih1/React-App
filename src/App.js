import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import AboutPage from "./components/pages/AboutPage";
const App = () =>(
   <div className="ui container">
    <Route path="/" exact component = {HomePage}/>
    <Route path="/LoginPage" exact component = {LoginPage}/>
    <Route path="/AboutPage" exact component = {AboutPage}/>
 </div>
);

export default App;
