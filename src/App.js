import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
