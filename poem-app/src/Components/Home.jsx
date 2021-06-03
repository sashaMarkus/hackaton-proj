import React from "react";
import "../App.css";

export function Home() {
  return (
    <div className="body">
      <div
        Style=" background-repeat: no-repeat; background: url(https://wallpaperaccess.com/full/198053.jpg)"
        class="jumbotron bg-cover text-white"
      >
        <div className="container py-5 text-center">
          <h1 className="display-4 font-weight-bold">Welcome to PoemIt</h1>
        </div>
      </div>
      <div className="container py-5">
        <div className="wrapper">
          <h2 className="h3 font-weight-bold">
            Please sign up in order to create and read poems!
          </h2>
          <div className="row">
            <div className="col-lg-10 mb-4">
              <p className="font-italic text-muted">
                Creating a poem is no task for the weak, click it, write it, and
                you will get it in a blink
              </p>
            </div>
            <div className="col-lg-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
