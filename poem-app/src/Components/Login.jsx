import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  async function handleLogin() {
    console.log(email, password);
    await axios.post('http://localhost:5050/user/login', {
      email: email,
      password: password,
    });
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
