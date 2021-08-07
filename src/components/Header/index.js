import React from "react";
import Nav from "../Nav";

function Header() {
  return (
    <header>
      <div className=" flex-row col-12  justify-space-between nav-text">
        <Nav></Nav>
      </div>
      <div className="header-text col-12 justify-center welcome-text">I am Alex Weghorst</div>
    </header>
  );
}

export default Header;
