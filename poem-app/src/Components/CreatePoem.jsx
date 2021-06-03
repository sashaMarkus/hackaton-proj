import React, { useState } from "react";
import axios from "axios";


export function CreatePoem() {
  const [textInput, setTextInput] = useState("");
  const [singer, setSinger] = useState("");

  function getSinger(e) {
  e.preventDefault();
  setSinger(e.target.value);
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    const singerAndText = await axios.post("http://localhost:5050/poem", {
      inputString: textInput,
      personality: singer
    })
    console.log(singerAndText);
  };
    
  return (
    <div className="d-flex flex-column body">
      <h2>Create a poem</h2>
      <form className="form-group">
        <p>Insert your words here</p>
        <input onChange={ (e) => setTextInput(e.target.value) } className="form-control" placeholder="Feel poetic yet?" />
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
        <button onClick={handleSubmit} id="poem-btn" className="btn btn-dark">
          Create Poem
        </button>
      </form>
    </div>
  );
}
