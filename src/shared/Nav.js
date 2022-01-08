import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link className="nav-logo-link" to="/">
          <img className="nav-logo" src={logo} alt="Marie Tracy"/>
        </Link>
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
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/timeline">Timeline</Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/scrapbook/page/1">Scrapbook</Link>
        </li>
        {/* <li className="nav-link-item">
          <Link className="nav-link" to="/autographs/page/1">Autographs</Link>
        </li>
        <li className="nav-link-item">
          <Link className="nav-link" to="/stories/page/1">Stories</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Nav;
