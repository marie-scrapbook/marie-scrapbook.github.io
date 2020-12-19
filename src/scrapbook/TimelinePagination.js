import React from 'react';
import { Link } from 'react-router-dom';
import './TimelinePagination.css';
import { timelineContent } from './../constants/timelineContent';

/**
 * LinkPagination
 * @param {Number} index - zero indexed number. Used to construct scrapbook page link.
 * @param {String} text - Link text
 */
function LinkPagination({
  index,
  text,
  title
}) {
  index = index+1; // human-friendly indexing
  let scrapbookPageLink = `/scrapbook/page/${index}`;
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

// Construct an array of timelineContent w/ years associated
let timeline = []
for (let index = 0; index < timelineContent.length; index++) {
  let year = timelineContent[index].navYear;
  if (year) {
    // include chapterIndex data
    timeline[`${year}`] = {
      "chapterIndex": timelineContent[index].chapterIndex,
      "title": timelineContent[index].title
    };
  }
}

// Construct an array of list element components for _all_ years in the timeline
let timelineEls = [];
for (let year = 1930; year <= 1947; year++) {
  if (timeline[year]) {
    let linkIndex = parseInt(timeline[year].chapterIndex);
    let title = timeline[year].title;
    timelineEls.push(<LinkPagination index={linkIndex} text={year} title={title}/>);
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
