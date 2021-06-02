<<<<<<< HEAD
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  async function handleLogin() {
    await axios.post('http://localhost:5050/user/login', {
=======
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

export function Login() {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function handleLogin() {
    const login = await axios.post("http://localhost:5050/user/login", {
>>>>>>> b462972a6b329c277a9eb9f5798fe56fcd2f2dc4
      email: email,
      password: password,
    });
    if (login.data) {
      history.push("/poem");
    }
  }

  function submit(e) {
    e.preventDefault();
  }

  return (
    <div className="d-flex flex-column validation">
      <h2>Log In Here</h2>
      <form onSubmit={submit} className="form-group">
        <label htmlFor="email">Email address:</label>
        <input
          className="form-control"
          name="Email"
          placeholder="Email"
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
        <label htmlFor="password">New Password:</label>
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
