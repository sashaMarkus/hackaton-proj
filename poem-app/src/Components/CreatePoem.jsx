import React, { useState } from "react";
import axios from "axios";

export function CreatePoem() {
  const [textInput, setTextInput] = useState("");

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
      <form onSubmit={handleSubmit} className="form-group">
        <p>Insert your words here</p>
        <input
          className="form-control"
          placeholder="Feel poetic yet?"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">
          Create Poem
        </button>
      </form>
    </div>
  );
}
