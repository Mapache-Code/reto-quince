import React from "react";

import devices from "../images/illustration-devices.svg";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__info">
          <span className="main__uppercase main__uppercase--bold">New</span>
          <span className="main__uppercase main__uppercase--normal">
            Monograph Dashboard
          </span>
          <h1 className="main__uppercase main__title">
            Powerful insights into your team
          </h1>
          <p className="main__text">
            Project planning and time tracking for agile teams
          </p>
          <button className="main__uppercase main__button">
            Schedule a demo
          </button>
          <span className="main__uppercase main__uppercase--normal">
            to see a live preview
          </span>
        </div>
        <div className="main__image">
          <img width="495" height="240" src={devices} alt="Devices" />
        </div>
      </div>
    </main>
  );
}

export default Main;
