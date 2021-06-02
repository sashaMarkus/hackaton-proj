import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { SignUp } from "./Components/SignUp";
import { Login } from "./Components/Login";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="bg-dark.bg-gradient">
      <Router>
        <NavBar />
        <Route path="/validation">
          <SignUp />
          <Login />
        </Route>
        <Route path="/login"></Route>
        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
      </Router>
    </div>
  );
}

export default App;
