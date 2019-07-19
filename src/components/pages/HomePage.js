import React from 'react';
import {Link} from 'react-router-dom'
const HomePage = () =>(
   <div>
    <h1>Homa Page</h1>
    <Link to="/LoginPage">Login Page</Link>|
    <Link to="/AboutPage">About Page</Link>
    <p>This is a Home page</p>
    </div>
);
export default HomePage;
