import React from "react";
import "../styles/creator.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <div>Logo</div>
        <div className="navbar__content__right">
          <div>Home</div>
          <div>Create</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
