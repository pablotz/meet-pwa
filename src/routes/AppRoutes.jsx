import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddGuest from "../pages/AddGuest.jsx";
import EditGuest from "../pages/EditGuest.jsx";
import GuestList from "../pages/GuestList.jsx";
import Home from "../pages/Home.jsx";

const AppRoutes = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/guests" component={GuestList} />
        <Route exact path="/add-guest" component={AddGuest} />
        <Route exact path="/guests-list" component={GuestList} />
        <Route exact path="/edit-guest/:id" component={EditGuest} />
      </Switch>
    </Router>
    </>
  );
};

export default AppRoutes;
