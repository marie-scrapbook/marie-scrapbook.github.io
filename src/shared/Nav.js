import React from 'react';
import './Nav.css';
import logo from './assets/signature.png';
import hamburgerMenuIcon from './assets/hamburger-menu.png';

function Nav({isMobile}) {
  /**
   * Handler for hamburger menu button click.
   * On button click, query for `nav-link-list` to toggle `show` class on/off
   */
  let openNav = () => {
    let navLinkList = document.querySelector('.nav-link-list');
    navLinkList.classList.toggle('show');
  };

  return (
    <nav className="nav sticky-top scrap-bkg">
      <div className="nav-main-row">
        <a className="nav-logo-link" href="index.html">
          <img className="nav-logo" src={logo} alt="Marie Tracy"/>
        </a>
        {isMobile &&
          <button onClick={openNav} className="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation">
            <img className="navbar-toggler-custom-icon"
                  src={hamburgerMenuIcon}
                  alt="hamburger menu by Dreshad Williams from the Noun Project"/>
          </button>
        }
      </div>
      <ul className="nav-link-list p-0 m-0">
        <li className="nav-link-item">
          <a className="nav-link" href="index.html">Home</a>
        </li>
        <li className="nav-link-item">
          <a className="nav-link" href="index.html#timeline">Timeline</a>
        </li>
        <li className="nav-link-item">
          <a className="nav-link" href="index.html">Scrapbook</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
