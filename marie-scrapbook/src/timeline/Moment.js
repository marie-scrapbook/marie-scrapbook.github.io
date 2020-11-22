import React from 'react';
import './Moment.css';

/**
 * Moment
 * @param {String} date - Required. Long Date formatted. E.g. "Jan 8, 1922". 
 * @param {String} [description] - Short description of the event. 1-2 sentences.
 * @param {String} [imgSrc] - Reference to the img import. No alt is specified for this decorative image.
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
      { imgSrc && <img class="moment-img" src={imgSrc} alt=""/> }
    </li>
  );
}

export default Moment;
