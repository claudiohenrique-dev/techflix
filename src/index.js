import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import RegisterVideo from './pages/register/video';
import RegisterCategory from './pages/register/category';

// TODO: customize 404 page
const page404 = () => <div>Error 404. Page not found ;-;</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route component={page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
