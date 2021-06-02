import React from "react";
import axios from "axios";
import { useState } from "react";

export function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleLogin() {
    axios.post("http://localhost:5050/user/login", {
      email: email,
      password: password,
    });
  }

  function submit(e) {
    e.preventDefault();
  }

  return (
    <div className="d-flex flex-column">
      <h2>Sign Up Here</h2>
      <form onSubmit={submit} className="form-group">
        <label for="email">Email address:</label>
        <input
          className="form-control"
          name="Email"
          placeholder="Email"
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
        <label for="password">New Password:</label>
        <input
          className="form-control"
          name="Password"
          type="pass"
          placeholder="Password"
          onChange={(event) => {
            setpassword(event.target.value);
          }}
        />

        <button type="submit" className="btn btn-dark" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
}
