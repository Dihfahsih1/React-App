import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import LoginForm from "./components/forms/LoginForm.js";
import "./styles.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
   document.getElementById('root')
 );
serviceWorker.register();
