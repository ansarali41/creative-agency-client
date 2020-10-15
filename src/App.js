import React, { createContext, useState } from 'react';
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
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Progress from './Components/Progress/Progress';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    isLoggedIn: false
  })

  return (
    <UserContext.Provider className="container" value={[user, setUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>

          <PrivateRoute path="/serviceList">
            <ServiceList></ServiceList>
          </PrivateRoute>

          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/progress">
            <Progress></Progress>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
          
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
