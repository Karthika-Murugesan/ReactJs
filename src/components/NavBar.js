import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <ol>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Work">Work</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      <li><Link to="/Login">Login</Link></li>
    </ol>
  );
};

export default NavBar;
