import React from 'react';
import './ScrapbookPage.css';
import { scrapbookContent } from './../constants/scrapbookContent';
import { formattedChapters } from './../constants/formattedChapters';
import ScrapbookPagination from './ScrapbookPagination';

/**
 * ScrapbookPage
 * @param {Number} index - human-friendly indexed number
 */
function ScrapbookPage({index}) {
  const realIndex = index - 1; // zero index the human friendly index
  const {
    audioSrc,
    caption,
    chapter,
    date,
    description,
    imgSrc,
    introAudioSrc,
    introTranscription,
    title,
    transcription
  } = scrapbookContent[realIndex];

  let formattedChapter = formattedChapters[chapter];

  return (
    <section className="scrapbook pt-0 pb-0">
      <div className="scrapbook__container">
        <figure className="scrapbook__figure figure">
          <img className="scrapbook__figure-img figure-img img-fluid" src={`${process.env.PUBLIC_URL}/assets/${imgSrc}`} alt=""/>
          { caption && <figcaption className="scrapbook__figure-caption figure-caption">{caption}</figcaption> }
        </figure>
        <div className="scrapbook__content">
          <h3 className="scrapbook__chapter">{formattedChapter}</h3>
          { title && <h4 className="scrapbook__title">{title}</h4> }
          { introAudioSrc && <audio controls src={`${process.env.PUBLIC_URL}/assets/audio/${introAudioSrc}`}></audio> }
          { introTranscription && <blockquote className="blockquote"><p className="scrapbook__transcription">{introTranscription}</p></blockquote>}
          { description && <p className="scrapbook__description">{description}</p>}
          { audioSrc && <audio controls src={`${process.env.PUBLIC_URL}/assets/audio/${audioSrc}`}></audio> }
          { transcription && <blockquote className="blockquote"><p className="scrapbook__transcription">{transcription}</p></blockquote>}
          <ScrapbookPagination index={index} />
        </div>
      </div>
    </section>
  );
}

export default ScrapbookPage;
