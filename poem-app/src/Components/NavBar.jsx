import React from "react";


export function NavBar() {
  return (
    <div className="navbar navbar-dark bg-dark">
      <a className="navbar-brand mb-0 h1" href="/">
        Home
      </a>
      <a className="navbar-brand mb-0 h1" href="/Profile">
        {" "}
        Profile
      </a>
      <a className="navbar-brand mb-0 h1" href="/validation">
        {" "}
        Login/Signup
      </a>
    </div>
  );
}
