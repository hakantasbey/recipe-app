import React from "react";
import Nav, { NavLi } from "./styled/NavStyled";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <NavLi to="/">
          <h1>RECIPE</h1>
        </NavLi>
      </div>

      <div>
        <NavLi to="/about">ABOUT</NavLi>
        <NavLi to="/contact">CONTACT</NavLi>
        <NavLi to="/login">LOGOUT</NavLi>
      </div>
    </Nav>
  );
};

export default Navbar;