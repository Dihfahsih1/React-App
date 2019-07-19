import React from 'react';

import {Link} from 'react-router-dom';
const LoginPage = () =>(
  <div>
  <h1>Login Page</h1>
  <Link to="/">Home Page</Link>|
  <Link to="/AboutPage">About Page</Link>
  <p>This is a login page</p>

  </div>

);
export default LoginPage;
