import React from 'react';
import './ScrapbookPage.css';
import { scrapbookContent } from './content';

/**
 * ScrapbookPage
 * @param {Number} index - human-friendly indexed number
 */
function ScrapbookPage({index}) {
  index = index - 1; // 0 index the human friendly index
  const {
    audioSrc,
    caption,
    date,
    description,
    imgSrc,
    title,
    transcription
  } = scrapbookContent[index];

  return (
    <section className="scrapbook container pb-0">
      <div className="scrapbook__container">
        <figure className="scrapbook__figure figure">
          <img className="scrapbook__figure-img figure-img img-fluid" src={`${process.env.PUBLIC_URL}/assets/${imgSrc}`} alt=""/>
          { caption && <figcaption className="figure-caption">{caption}</figcaption> }
        </figure>
        <div className="scrapbook__content">
            <h3 className="scrapbook__date date">{date}</h3>
            <h3 className="scrapbook__title">{title}</h3>
          { audioSrc && <audio controls src={`${process.env.PUBLIC_URL}/assets/audio/${audioSrc}`}></audio> }
          { transcription && <blockquote className="blockquote"><p className="scrapbook__transcription">{transcription}</p></blockquote>}
          { description && <p className="scrapbook__description">{description}</p>}
        </div>
      </div>
    </section>
  );
}

export default ScrapbookPage;
