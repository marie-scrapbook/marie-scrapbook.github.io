import React from 'react';
import { Link } from 'react-router-dom';
import './ScrapbookPagination.css';
import { autographsContent } from './../constants/autographsContent';
import { scrapbookContent } from './../constants/scrapbookContent';

/**
 * ScrapbookPagination
 * @param {Number} index - human-friendly indexed number corresponding to the current scrapbook page content
 */
function ScrapbookPagination({
  index,
  isAutograph
}) {
  const content = isAutograph ? autographsContent : scrapbookContent,
        urlPrefix = isAutograph ? 'autographs' : 'scrapbook';

  const nextIndex = parseInt(index) + 1,
        nextLink = nextIndex <= content.length ? `/${urlPrefix}/page/${nextIndex}` : '',
        prevIndex = parseInt(index) - 1,
        prevLink = prevIndex > 0 ? `/${urlPrefix}/page/${prevIndex}` : '';

  return (
    <nav className="scrapbook-pagination" aria-label="Scrapbook page navigation">
      <ul className="pagination scrapbook-pagination__list">
        <li className="page-item">
          {prevLink && <Link className="page-link scrapbook-pagination__link" to={prevLink}>« Prev</Link>}
        </li>
        <li className="page-item">
          {nextLink && <Link className="page-link scrapbook-pagination__link" to={nextLink}>Next »</Link>}
        </li>
      </ul>
    </nav>
  );
}

export default ScrapbookPagination;
