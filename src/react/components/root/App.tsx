import React from "react";
import "./App.css";
import { NavbarLink } from "../app/navbarLink";
import { LoginSectionLink } from "../app/loginSectionLink";
import { Route, Redirect, Switch } from "react-router-dom";
import { MainSectionLink } from "../app/mainSectionLink";

function App() {
  return (
    <div className="test">
      <NavbarLink></NavbarLink>
      <Switch>
        <Route exact path="/login" component={LoginSectionLink} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/mainPage" component={MainSectionLink} />
      </Switch>
    </div>
  );
}

export default App;
