import React from 'react';
import { Link } from 'react-router-dom';
import './Moment.css';

/**
 * Moment
 * @param {String} date - Required. Long Date formatted. E.g. "Jan 8, 1922". 
 * @param {String} [description] - Optional. Short description of the event. 1-2 sentences.
 * @param {String} [imgSrc] - Optional. Image source must be located under public/assets/timeline directory.
 * @param {String} title - Required. Short title of the event. 1-2 lines.
 */
function Moment({
  date,
  description,
  imgSrc,
  index,
  title
}) {
  let scrapbookPageLink = `/scrapbook/page/${index}`;
  return (
    <li className="moment">
      <div className="moment-content">
        <h3 className="moment-date date">{date}</h3>
        <h3 className="moment-title">{title}</h3>
        { description && <p className="moment-description">{description}</p> }
      </div>
      { imgSrc && !index && <div className="moment-img-link"><img className="moment-img" src={`${process.env.PUBLIC_URL}/assets/timeline/${imgSrc}`} alt=""/></div> }
      { imgSrc && index && <Link className="moment-img-link" to={scrapbookPageLink}><img className="moment-img" src={`${process.env.PUBLIC_URL}/assets/timeline/${imgSrc}`} alt=""/></Link> }
    </li>
  );
}

export default Moment;
