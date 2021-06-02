import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { SignUp } from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Router>
    </div>
  );
}

export default App;
