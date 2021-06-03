import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export function CreatePoem() {
  const [singer, setSinger] = useState("");

  function getSinger(e) {
    e.preventDefault();
    setSinger(e.target.value);
  }
  return (
    <div className="d-flex flex-column body">
      <h2>Create a poem</h2>
      <form className="form-group">
        <p>Insert your words here</p>
        <input className="form-control" placeholder="Feel poetic yet?" />
        <h2>Select artist</h2>
        <p>Move the mouse over the button to open the dropdown menu.</p>

        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <button value="Leonard Cohen" onClick={getSinger} className="btn">
              Leonard Cohen
            </button>
            <button value="Eminem" onClick={getSinger} className="btn">
              Eminem
            </button>
          </div>
        </div>
        <h3>Artist Selected: {singer}</h3>
        <button id="poem-btn" className="btn btn-dark">
          Create Poem
        </button>
      </form>
    </div>
  );
}
