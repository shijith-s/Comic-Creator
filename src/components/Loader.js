import React from "react";
import ball from "../assets/ball_loader.gif";
import "../styles/loader.css";

function Loader() {
  return (
    <div className="loader__container">
      <div className="loader__image">
        <img src={ball} alt="Loading..." />
      </div>
      <div>Let your creativity flow...</div>
    </div>
  );
}

export default Loader;
