import React from "react";

export function CreatePoem() {
  return (
    <div className="d-flex flex-column body">
      <h2>Create a poem</h2>
      <form className="form-group">
        <p>Insert your words here</p>
        <input className="form-control" placeholder="Feel poetic yet?" />
        <button className="btn btn-dark">Create Poem</button>
      </form>
    </div>
  );
}
