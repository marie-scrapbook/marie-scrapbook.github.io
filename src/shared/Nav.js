import React from 'react';
import './Nav.css';
import logo from './assets/signature.png';
import hamburgerMenuIcon from './assets/hamburger-menu.png';

function Nav() {
  return (
    <nav className="nav sticky-top scrap-bkg">
      <div className="nav-main-row">
        <a className="nav-logo-link" href="index.html">
          <img className="nav-logo" src={logo} alt="Marie Tracy"/>
        </a>
        <img className="nav-hamburger-menu" id="nav-hamburger-menu" src={hamburgerMenuIcon} alt="hamburger menu by Dreshad Williams from the Noun Project"/>
      </div>
      <a className="nav-link" href="index.html">Home</a>
      <a className="nav-link" href="index.html#timeline">Timeline</a>
      <a className="nav-link" href="index.html">Scrapbook</a>
    </nav>
  );
}

export default Nav;
