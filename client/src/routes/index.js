import React from 'react';
import { Route, Link } from 'react-router-dom';
import HeaderBar from '../components/HeaderBar';
import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';


const routes = (
  <div>
    <Route path='/' component={HeaderBar}  />
    <Route path='/login' component={LoginPage}  />
    <Route path='/home' component={HomePage}  />
  </div>
);
export default routes;
