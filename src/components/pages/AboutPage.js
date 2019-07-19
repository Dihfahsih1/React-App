
import React from 'react';
import {Link} from 'react-router-dom';
//import LoginForm from "../forms/LoginForm";
const AboutPage = () =>(
   <div>
    <h1>About Page</h1>
    <Link to="/LoginPage">Login</Link>|
    <Link to="/">Home</Link>
    <p>This is about page</p>
    </div>
);
export default AboutPage;
