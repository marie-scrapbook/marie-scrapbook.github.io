import React from 'react';
import './Nav.css';
import logo from './assets/signature.png';

function Nav() {
  return (
    <nav className="nav sticky-top scrap-bkg">
      <a className="nav-logo-link" href="index.html">
        <img className="nav-logo" src={logo} alt="Marie Tracy"/>
      </a>
      <a className="nav-link" href="index.html">Home</a>
      <a className="nav-link" href="index.html#timeline">Timeline</a>
      <a className="nav-link" href="index.html">Scrapbook</a>
    </nav>
  );
}

export default Nav;
