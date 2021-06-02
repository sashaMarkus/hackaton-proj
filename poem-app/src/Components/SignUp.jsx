import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router';

export function SignUp() {
  const history = useHistory();
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  async function handleSignUp() {
    await axios.post("http://localhost:5050/user/signup", {
      firstName: firstName,
      lastName: lastName,
      email: emailReg,
      password: passwordReg,
      confirmPassword: passwordConf,
    });
    history.push('/');
  }

  function submit(e) {
    e.preventDefault();
  }

  return (
    <div className="d-flex flex-column validation">
      <h2>Sign Up Here</h2>
      <form onSubmit={submit} className="form-group">
        <label htmlFor="first-name">First Name:</label>
        <input
          className="form-control"
          name="First-Name"
          placeholder="First Name"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <label htmlFor="last-name">Last Name:</label>
        <input
          className="form-control"
          name="Last-Name"
          placeholder="Last Name"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <label htmlFor="email">Email address:</label>
        <input
          className="form-control"
          name="Email"
          placeholder="Email"
          onChange={(event) => {
            setEmailReg(event.target.value);
          }}
        />
        <label htmlFor="password">New Password:</label>
        <input
          className="form-control"
          name="Password"
          type="pass"
          placeholder="Password"
          onChange={(event) => {
            setPasswordReg(event.target.value);
          }}
        />
        <label htmlFor="password-conf">Password Confirmation:</label>
        <input
          className="form-control"
          name="Password-Conf"
          placeholder="Password Confirmation"
          onChange={(event) => {
            setPasswordConf(event.target.value);
          }}
        />
        <button type="submit" className="btn btn-dark" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
