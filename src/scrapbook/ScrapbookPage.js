import React, { useEffect } from 'react';
import {
  useLocation
} from 'react-router-dom';
import './ScrapbookPage.css';
import { autographsContent } from './../constants/autographsContent';
import { scrapbookContent } from './../constants/scrapbookContent';
import { storyContent } from './../constants/storyContent';
import { formattedChapters } from './../constants/formattedChapters';
import ScrapbookPagination from './ScrapbookPagination';

/**
 * ScrapbookPage
 * @param {Number} index - human-friendly indexed number
 */
function ScrapbookPage({ index , type }) {
  const realIndex = index - 1; // zero index the human friendly index
  const content = getContent(type, realIndex);
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
  } = content;

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

  /**
   * TranscriptContent
   * Main content for the scrapbook page
   */
  function TranscriptContent() {
    let availableContent = [];
    if (introAudioSrc) {
      availableContent.push(
        <audio controls src={`${process.env.PUBLIC_URL}/assets/audio/${introAudioSrc}`}></audio>
      );
    }
    if (introTranscription) {
      availableContent.push(
        <blockquote className="blockquote"><p className="scrapbook__transcription">{introTranscription}</p></blockquote>);
    }
    if (audioSrc) {
      availableContent.push(
        <audio controls src={`${process.env.PUBLIC_URL}/assets/audio/${audioSrc}`}></audio>
      )
    }
    if (description) {
      availableContent.push(
        <p className="scrapbook__description">{description}</p>
      )
    }
    if (transcription) {
      availableContent.push(
        <blockquote className="blockquote">
          <p className="scrapbook__transcription">{transcription}</p>
        </blockquote>
      );
    }
    return (availableContent);
  }

  /**
   * LearnMoreTabs
   * Include "Learn more" tab for Wikipedia excerpt in addition to TranscriptContent
   */
   function LearnMoreTabs() {
    return (
      <div>
        <ul className="scrapbook__tabs nav nav-tabs" role="tablist">
          <li className="scrapbook__tab nav-item" role="presentation">
            <button className="scrapbook__tab-link nav-link active" id="transcript-tab" data-bs-toggle="tab" data-bs-target="#transcript" type="button" role="tab" aria-controls="transcript" aria-selected="true">
              In her words
            </button>
          </li>
          <li className="scrapbook__tab nav-item" role="presentation">
            <button className="scrapbook__tab-link nav-link" id="more-tab" data-bs-toggle="tab" data-bs-target="#more" type="button" role="tab" aria-controls="more" aria-selected="false" >
              Learn more
            </button>
          </li>
        </ul>
        <div className="scrapbook__tab-content tab-content">
          <div className="tab-pane fade show active" id="transcript" role="tabpanel" aria-labelledby="transcript-tab">
            <TranscriptContent/>
          </div>
          <div className="tab-pane fade" id="more" role="tabpanel" aria-labelledby="more-tab">
            <div className="scrapbook__learn-more">
              <div className="scrapbook__wiki" id="wikiContent"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="scrapbook pt-0 pb-0">
      <div className="scrapbook__container">
        <figure className="scrapbook__figure figure">
          <img className="scrapbook__figure-img figure-img img-fluid" src={`${process.env.PUBLIC_URL}/assets/${imgSrc}`} alt=""/>
          { caption &&
            <figcaption className="scrapbook__figure-caption figure-caption">
              {caption}
              <button className="scrapbook__caption-dismiss"
                onClick={dismissCaption}>✕</button>
            </figcaption> }
        </figure>
        <div className="scrapbook__content">
          { mainTitle && <h3 className="scrapbook__chapter">{mainTitle}</h3> }
          { chapter && title && <h4 className="scrapbook__title">{title}</h4> }
          { wiki && <LearnMoreTabs/> }
          { !wiki && <TranscriptContent/> }
          <ScrapbookPagination index={index} type={type} />
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
        page.url = `http://en.wikipedia.org/wiki/${pageId}`;
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
  subtitleEl.setAttribute("target", "_blank");
  subtitleEl.innerHTML = '<em>Read the full article »</em>';
  wikiContentFragment.appendChild(subtitleEl);
  // Update DOM
  let wikiContentContainer = document.getElementById('wikiContent');
  if (wikiContentContainer) {
    wikiContentContainer.innerHTML = "";
    wikiContentContainer.appendChild(wikiContentFragment);
  }
}

function getContent(type, i) {
  switch(type) {
    case 'autographs':
      return autographsContent[i];
    case 'stories':
      return storyContent[i];
    case 'scrapbook':
      return scrapbookContent[i];
    default:
      return {};
  }
}

export default ScrapbookPage;
