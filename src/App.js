import React from "react";
import Navigation from "./components/navbar";
import Home from "./components/home";
import Products from "./components/products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {} from "react-bootstrap";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/products" component={Products}/>        </Switch>
      </Router>
    </div>
  );
}

export default App;
