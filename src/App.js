import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Order from './Components/Dashboard/Order/Order';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import Review from './Components/Dashboard/Review/Review';

function App() {
  return (
    <Router>
      <Switch>
        {/* private route */}
        <Route path="/order">
          <Order></Order>
        </Route>
        <Route path="/serviceList">
          <ServiceList></ServiceList>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
