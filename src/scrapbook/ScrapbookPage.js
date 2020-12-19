import React from 'react';
import './ScrapbookPage.css';
import { scrapbookContent } from './../constants/scrapbookContent';

/**
 * ScrapbookPage
 * @param {Number} index - human-friendly indexed number
 */
function ScrapbookPage({index}) {
  index = index - 1; // zero index the human friendly index
  const {
    audioSrc,
    caption,
    chapter,
    date,
    description,
    imgSrc,
    title,
    transcription
  } = scrapbookContent[index];

  const formattedChapters = {
    "millerSisters": "Miller Sisters Dance Studio",
    "tracySisters": "Tracy Sisters Studio",
    "graduation": "Graduates High School"
  }

  let formattedChapter = formattedChapters[chapter];

  return (
    <section className="scrapbook container pb-0">
      <div className="scrapbook__container">
        <figure className="scrapbook__figure figure">
          <img className="scrapbook__figure-img figure-img img-fluid" src={`${process.env.PUBLIC_URL}/assets/${imgSrc}`} alt=""/>
          { caption && <figcaption className="figure-caption">{caption}</figcaption> }
        </figure>
        <div className="scrapbook__content">
          <h3 className="scrapbook__chapter">{formattedChapter}</h3>
          { title && <h4 className="scrapbook__title">{title}</h4> }
          { audioSrc && <audio controls src={`${process.env.PUBLIC_URL}/assets/audio/${audioSrc}`}></audio> }
          { transcription && <blockquote className="blockquote"><p className="scrapbook__transcription">{transcription}</p></blockquote>}
          { description && <p className="scrapbook__description">{description}</p>}
        </div>
      </div>
    </section>
  );
}

export default ScrapbookPage;
