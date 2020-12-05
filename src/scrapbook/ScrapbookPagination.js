import React from 'react';
import './ScrapbookPagination.css';

/**
 * ScrapbookPagination
 */
function ScrapbookPagination() {
  return (
    <nav className="scrapbook-pagination container" aria-label="Scrapbook page navigation">
      <ul class="pagination scrapbook-pagination__list">
        <li class="page-item">
          <a class="page-link scrapbook-pagination__link" href="/" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link scrapbook-pagination__link" href="/">1</a></li>
        <li class="page-item"><a class="page-link scrapbook-pagination__link" href="/">2</a></li>
        <li class="page-item"><a class="page-link scrapbook-pagination__link" href="/">3</a></li>
        <li class="page-item">
          <a class="page-link scrapbook-pagination__link" href="/" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default ScrapbookPagination;
