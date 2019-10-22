import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Artists from "./components/Artists";
import Albums from "./components/Albums";

const Router = () => {
  return (
    <BrowserRouter>
      {/* */}
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/artists" component={Artists} />
        <Route path="/albums" component={Albums} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
