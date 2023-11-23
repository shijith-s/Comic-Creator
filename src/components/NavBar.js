import React from "react";
import "../styles/creator.css";
import logo from "../assets/dashtoon_logo.png";

function NavBar({ handleExport }) {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__content__left">
          <div className="navbar__logo">
            <img src={logo} alt="logo" />
          </div>
          <div>Dashtoon</div>
        </div>

        <div className="navbar__content__right">
          <button className="navbar__export__btn" onClick={handleExport}>
            Export
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
