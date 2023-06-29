import React from "react"
import { Link, NavLink } from "react-router-dom"

import logo from "../images/logos/tmc.png"
// import '../main.css';
const Footer = () => {
  return (
<footer className="d-flex text-center text-secondary justify-content-center align-items-center mt-5 p-3">
<ul style={{listStyle: 'none'}}>
  <li>TMC Architecture </li>
  <li>address </li>
  <li>address </li>
  <li>phone </li>
  <li>email </li>
</ul>
</footer>
  );
}

export default Footer;