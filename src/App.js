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
import ServiceListAdmin from './Components/Admin/ServiceListAdmin/ServiceListAdmin';
import AddService from './Components/Admin/AddService/AddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    photo: ''
  })

  return (
    <UserContext.Provider className="container" value={[user, setUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>

          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>

          <PrivateRoute path="/serviceList">
            <ServiceList></ServiceList>
          </PrivateRoute>

          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>

          <PrivateRoute path="/serviceListAdmin">
            <ServiceListAdmin />
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>

          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
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
