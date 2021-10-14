import React, { useEffect } from 'react';
import {
  useLocation
} from 'react-router-dom';
import './ScrapbookPage.css';
import { autographsContent } from './../constants/autographsContent';
import { scrapbookContent } from './../constants/scrapbookContent';
import { formattedChapters } from './../constants/formattedChapters';
import ScrapbookPagination from './ScrapbookPagination';

/**
 * ScrapbookPage
 * @param {Number} index - human-friendly indexed number
 */
function ScrapbookPage({ index , isAutograph }) {
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
    transcription,
    wiki
  } = isAutograph ? autographsContent[realIndex] : scrapbookContent[realIndex];

  let mainTitle = formattedChapters[chapter] || title;

  // Location updates on React Router URL update
  // Docs: https://reactrouter.com/web/api/Hooks/uselocation
  let location = useLocation();

  // useEffect runs after completed render
  // Docs: https://reactjs.org/docs/hooks-reference.html#useeffect
  useEffect(() => {
    if (wiki) {
      fetchWikiContent(wiki);
    }
  }, [location]);

  return (
    <section className="scrapbook pt-0 pb-0">
      <div className="scrapbook__container">
        <figure className="scrapbook__figure figure">
          <img className="scrapbook__figure-img figure-img img-fluid" src={`${process.env.PUBLIC_URL}/assets/${imgSrc}`} alt=""/>
          { caption &&
            <figcaption className="scrapbook__figure-caption figure-caption">
              {caption}
              <button className="scrapbook__caption-dismiss"
                onClick={dismissCaption}>
                ✕
              </button>
            </figcaption> }
        </figure>
        <div className="scrapbook__content">
          { mainTitle && <h3 className="scrapbook__chapter">{mainTitle}</h3> }
          { chapter && title && <h4 className="scrapbook__title">{title}</h4> }
          { introAudioSrc && <audio controls src={`${process.env.PUBLIC_URL}/assets/audio/${introAudioSrc}`}></audio> }
          { introTranscription && <blockquote className="blockquote"><p className="scrapbook__transcription">{introTranscription}</p></blockquote>}
          { description && <p className="scrapbook__description">{description}</p>}
          { audioSrc && <audio controls src={`${process.env.PUBLIC_URL}/assets/audio/${audioSrc}`}></audio> }
          { transcription && <blockquote className="blockquote"><p className="scrapbook__transcription">{transcription}</p></blockquote>}
          { wiki &&
            <div className="scrapbook__learn-more">
              <button className="scrapbook__learn-more-btn" onClick={toggleWiki}>Learn more</button>
              <div className="scrapbook__wiki collapse" id="wikiContent"></div>
            </div>}
          <ScrapbookPagination index={index} isAutograph={isAutograph} />
        </div>
      </div>
    </section>
  );
}

/**
 * For some screens, a caption overly overlays the image.
 * This function offers dismissal to clear the caption for viewers.
 * @param {HTMLEvent} e 
 */
function dismissCaption(e) {
  if (e.target && e.target.parentElement) {
    e.target.parentElement.style.display = "none";
  }
}

/**
 * Toggle show/hide Wiki content
 * @param {HTMLEvent} e 
 */
function toggleWiki(e) {
  let wikiContentContainer = document.getElementById('wikiContent');
  wikiContentContainer.classList.contains('show') ? wikiContentContainer.classList.remove('show') : wikiContentContainer.classList.add('show') ;
}

/**
 * Fetch Wikipedia page extracts
 * API: https://www.mediawiki.org/wiki/API:Get_the_contents_of_a_page
 * @param {Number} pageId - Unique ID for Wikipedia article
 */
function fetchWikiContent(pageId) {
  fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&redirects=1&origin=*&titles=${pageId}`)
    .then(response => response.json())
    .then((data) => {
      let page = Object.values(data?.query?.pages)[0];
      if (page) {
        page.url = `http://en.wikipedia.org/?curid=${pageId}`;
        updateWikiContent(page);
      }
    });
}

/**
 * Update DOM with Wiki content
 * @param {String} title - Wikipedia title
 * @param {String} extract - Wikipedia content snippet
 */
function updateWikiContent({ extract, url }) {
  let wikiContentFragment = new DocumentFragment();
  // Add Wiki extract
  let extractEl = document.createElement('p');
  extractEl.innerHTML = extract;
  wikiContentFragment.appendChild(extractEl);
  // Read more link
  let subtitleEl = document.createElement('a');
  subtitleEl.setAttribute('href', url);
  subtitleEl.innerHTML = '<em>Read the full article »</em>';
  wikiContentFragment.appendChild(subtitleEl);
  // Update DOM
  let wikiContentContainer = document.getElementById('wikiContent');
  wikiContentContainer.innerHTML = "";
  wikiContentContainer.appendChild(wikiContentFragment);
}

export default ScrapbookPage;
