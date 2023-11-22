import React from "react";
import Dualball from "../assets/dual_ball.gif";
import "../styles/loader.css";

function Loader() {
  return (
    <div className="loader__container">
      <div className="loader__image">
        <img src={Dualball} alt="Loading..." />
      </div>
      {/* <div>Let your creativity flow...</div> */}
    </div>
  );
}

export default Loader;
