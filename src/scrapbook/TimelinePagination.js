import React from 'react';
import { Link } from 'react-router-dom';
import './TimelinePagination.css';
import { timelineContent } from './../constants/timelineContent';

/**
 * getScrapbookPageLink
 * @param {Number} index - Zero indexed number. Used to construct scrapbook page link.
 */
function _getScrapbookPageLink(index) {
  index = index+1; // human-friendly indexing
  return `/scrapbook/page/${index}`;
}

/**
 * SingleLinkPagination
 * @param {Number} index - Zero indexed number. Used to construct scrapbook page link.
 * @param {String} text - Link text
 */
function SingleLinkPagination({
  index,
  text,
  title
}) {
  let scrapbookPageLink = _getScrapbookPageLink(index);
  return (
    <li className="timeline-pagination__li">
      <Link className="timeline-pagination__link" to={scrapbookPageLink}>
        {text}
        <p className="timeline-pagination__link-title">{title}</p>
      </Link>
    </li>
  )
}

/**
 * MultiLinkPagination
 * @param {String} text - Visible text
 * @param {[ChapterForMultiLinkPagination]} chapterLinks - Subchapters visible on hover
 */
function MultiLinkPagination({
  text,
  chapterLinks
}) {
  return (
    <li className="timeline-pagination__li">
      {text}
      {chapterLinks}
    </li>
  )
}

/**
 * ChapterForMultiLinkPagination
 * @param {Number} index - Zero indexed number. Used to construct scrapbook page link.
 * @param {String} text - Link text
 */
function ChapterForMultiLinkPagination({
  index,
  title
}) {
  let scrapbookPageLink = _getScrapbookPageLink(index);
  return (
    <Link className="timeline-pagination__link" to={scrapbookPageLink}>
      <p className="timeline-pagination__link-title">{title}</p>
    </Link>
  )
}

/**
 * DummyPagination
 * For list elements with no associated link
 */
function DummyPagination() {
  return (
    <li className="timeline-pagination__li">
      –
    </li>
  )
}

/**
 * The timelineNav is an array of timelineContent, identified by an associated navYear
 */
let timelineNav = []
for (let index = 0; index < timelineContent.length; index++) {
  let year = timelineContent[index].navYear;
  if (year) {
    if (timelineNav[`${year}`]) {
      // if there is already a chapter associated with this year,
      // include multiple chapters as an array
      timelineNav[`${year}`] = [
        timelineNav[`${year}`],
        {
          "chapterIndex": timelineContent[index].chapterIndex,
          "title": timelineContent[index].title
        }
      ]
    } else {
      // if there is no object yet for this year,
      // add an object of the relevant chapter data
      timelineNav[`${year}`] = {
        "chapterIndex": timelineContent[index].chapterIndex,
        "title": timelineContent[index].title
      };
    }
  }
}

/** 
 * Create a React component to represent _every_ year in the timeline
 */
let timelineEls = [];
for (let year = 1930; year <= 1947; year++) {
  if (timelineNav[year]) {
    // if there are multiple chapters for a year,
    if (Array.isArray(timelineNav[year])) {
      let chapters = [];
      for (let i = 0; i < timelineNav[year].length; i++) {
        let linkIndex = parseInt(timelineNav[year][i].chapterIndex);
        let title = timelineNav[year][i].title;
        // Create a single link for each chapter
        chapters.push(<ChapterForMultiLinkPagination index={linkIndex} title={title}/>);
      }
      // And then yield these into the list-item with multiple link support
      timelineEls.push(<MultiLinkPagination text={year} chapterLinks={chapters}/>);
    } else {
      // otherwise, add a single link for the associated chapter
      let linkIndex = parseInt(timelineNav[year].chapterIndex);
      let title = timelineNav[year].title;
      timelineEls.push(<SingleLinkPagination index={linkIndex} text={year} title={title}/>);
    }
  // if there are no chapters for this year, we just include a dummy pagination for timeline effect
  } else {
    timelineEls.push(<DummyPagination/>);
  }
}

/**
 * TimelinePagination
 */
function TimelinePagination() {
  const timelineNav = timelineEls.map((el) => {
    return el;
  })

  return (
    <nav className="timeline-pagination section" aria-label="Timeline navigation">
      <ul className="timeline-pagination__list">
        {timelineNav}
      </ul>
    </nav>
  );
}

export default TimelinePagination;
