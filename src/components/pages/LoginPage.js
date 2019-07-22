import React from 'react';
import LoginForm from '../forms/LoginForm';
import {Link} from 'react-router-dom';
const LoginPage = () =>(
  <div>
  <h1>Login Page</h1>
  <Link to="/">Home Page</Link>|
  <Link to="/AboutPage">About Page</Link>
  <LoginForm/>

  </div>

);
export default LoginPage;
