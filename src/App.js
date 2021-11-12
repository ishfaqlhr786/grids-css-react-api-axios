import logo from "./logo.svg";
import "./App.css";
import { Grids } from "./Grids";
import { Home } from "./Home";
import { Home2 } from "./Home2";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import $ from "jquery";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";
import { NavBar } from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Route exact path="/">
          <Home2 />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
      </Router>
    </>
  );
}

export default App;
