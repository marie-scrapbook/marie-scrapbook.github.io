import React from 'react';
import { Link } from 'react-router-dom';
import './ScrapbookPagination.css';
import { scrapbookContent } from './../constants/scrapbookContent';

/**
 * SinglePagination
 * @param {Number} index - 0-indexed number
 */
function SinglePagination({
  index
}) {
  index = index+1; // human-friendly indexing
  let scrapbookPageLink = `/scrapbook/page/${index}`;
  return (
    <li className="page-item">
      <Link className="page-link scrapbook-pagination__link" to={scrapbookPageLink}>{index}</Link>
    </li>
  )
}

/**
 * ScrapbookPagination
 * @param {Number} curr - human-friendly indexed number corresponding to the current scrapbook page content
 */
function ScrapbookPagination({
  curr
}) {
  const scrapbookPages = scrapbookContent.map((content, index) => (
    <SinglePagination index={index}/>
  ));

  return (
    <nav className="scrapbook-pagination container" aria-label="Scrapbook page navigation">
      <ul className="pagination scrapbook-pagination__list">
        {scrapbookPages}
      </ul>
    </nav>
  );
}

export default ScrapbookPagination;
