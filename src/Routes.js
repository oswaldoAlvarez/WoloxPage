import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPageContext from "./components/page/LandingPageContext";
import Register from "./components/register/Register";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPageContext} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default Routes;