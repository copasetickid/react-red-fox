import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import StoresPage from './components/store/StoresPage';
import CreateStorePage from './components/store/CreateStorePage';


export default (
  <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="stores" component={StoresPage}/>
      <Route path="newstore" component={CreateStorePage} />
  </Route>
);
