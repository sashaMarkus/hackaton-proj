import React, { useState } from "react";
import axios from "axios";

export function CreatePoem() {
  const [textInput, setTextInput] = useState("");
  const [singer, setSinger] = useState("");
  const [poemSelf, setPoemSelf] = useState([]);

  function getSinger(e) {
    e.preventDefault();
    setSinger(e.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:5050/poem", {
      inputString: textInput,
      personality: singer,
    });

    let finalResult = "";
    for (let i = 0; i < response.data.length; i++) {
      finalResult += `${response.data[i]}\n`;
    }
    setPoemSelf(finalResult);
    return finalResult;
  };

  return (
    <div className="d-flex flex-column body">
      <h2>Create a poem</h2>
      <form className="form-group">
        <p>Insert your words here</p>
        <input
          onChange={(event) => setTextInput(event.target.value)}
          className="form-control"
          placeholder="Feel poetic yet?"
        />
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
            <button value="The Beatles" onClick={getSinger} className="btn">
              The Beatles
            </button>
            <button value="Amy Winehouse" onClick={getSinger} className="btn">
              Amy Winehouse
            </button>
            <button value="Adele" onClick={getSinger} className="btn">
              Adele
            </button>
          </div>
        </div>
        <h3>Artist Selected: {singer}</h3>
        <button onClick={handleSubmit} id="poem-btn" className="btn btn-dark">
          Create Poem
        </button>
      </form>
      <div id="poem" className="card text-white bg-secondary mb-3">
        <div className="card-header">Created by: at:</div>
        <div class="card-body">
          <h5 class="card-title">Poem</h5>
          <p class="card-text">{poemSelf}</p>
        </div>
      </div>
    </div>
  );
}
