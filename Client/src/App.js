import React from "react";
import  Admin from "./component/Admin";
import  Assignment from "./component/AssignmentDescription";
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <Router>
    <div className="App">
      <Switch>

      <Route exact path="/new_user" component={Admin} />
      <Route  path="/Assignment" component={Assignment} />
               
      </Switch>
    </div>
  </Router>
  );
}

export default App;
