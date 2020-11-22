import React from 'react';
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
  title
}) {
  return (
    <li className="moment">
      <div className="moment-content">
        <h3 className="moment-date date">{date}</h3>
        <h3 className="moment-title">{title}</h3>
        { description && <p className="moment-description">{description}</p> }
      </div>
      { imgSrc && <img class="moment-img" src={`${process.env.PUBLIC_URL}/assets/timeline/${imgSrc}`} alt=""/> }
    </li>
  );
}

export default Moment;
