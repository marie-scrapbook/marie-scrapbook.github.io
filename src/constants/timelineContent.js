import { scrapbookContent } from './scrapbookContent';
import { formattedChapters } from './formattedChapters';

const millerSisters = 'web-ready/JrRecital.png';
const tracySisters = 'web-ready/TracySistersRecital.png';
const amesSisters = 'web-ready/ames-sisters-stairs.png';
const graduation = 'web-ready/graduation.jpeg';
const marvelettes = 'web-ready/marvelettes-pyramid.png';
const southAmerica = 'web-ready/south-america-crop.png';
const oneOrTheOther = 'web-ready/one-or-the-other.png';
const showUpAtRoxy = 'thru-door.png';
const roxyette = 'web-ready/roxyette-ball.png';
const fitModel = 'web-ready/fit-model.jpg';
const retirementParty = 'web-ready/bar-across-the-street.png';
const wedding = 'web-ready/cropped-wedding.jpeg';

/**
 * Get first instance of a key with the matching chapter title property.
 * This is the entry point fo the chapter.
 * @param {String} chapterTitle - must correspond to chapter naming in `scrapbookContent`
 */
function getChapterIndex(chapterTitle) {
  for (let index = 0; index < scrapbookContent.length; index++) {
    if (scrapbookContent[index]["chapter"] === chapterTitle) {
        return index;
    }
  }
}

export const timelineContent = [
  {
    "date": "Jan 8, 1922",
    "title": "Born Elmhurst, Queens"
  },
  {
    "date": "1930-1938",
    "description": "At 8 years old, Marie takes up dance lessons. It's not until high school that she begins to consider it as a career.",
    "chapterIndex": getChapterIndex("millerSisters"),
    "imgSrc": millerSisters,
    "title": formattedChapters["millerSisters"],
    "navYear": "1930",
  },
  {
    "date": "1935",
    "description": "Marie and her sisters ran a local dance program from their backyard. Students paid 25¢ a class, and the three sisters used the profits to fund dance classes for Marie, violin lessons for Ann, and piano lessons for Patricia.",
    "chapterIndex": getChapterIndex("tracySisters"),
    "imgSrc": tracySisters,
    "title": formattedChapters["tracySisters"],
    "navYear": "1935",
  },
  {
    "chapterIndex": getChapterIndex("amesSisters"),
    "date": "1939-1940",
    "description": "Took over as the fifth Ames Sister after one of the real sisters became pregnant. At 17, toured from New England to Chicago in this singing, dancing, and acrobatic act.",
    "imgSrc": amesSisters,
    "title": formattedChapters["amesSisters"],
    "navYear": "1939",
  },
  {
    "date": "1940",
    "description": "Graduates from Newtown High School in Elmhurst, Queens, while continuing to perform with the Ames Sisters.",
    "chapterIndex": getChapterIndex("graduation"),
    "imgSrc": graduation,
    "title": formattedChapters["graduation"],
  },
  {
    "chapterIndex": getChapterIndex("marvelettes"),
    "date": "1940-1941",
    "description": "As several of the Ames sisters leave to get married, the group brings in new girls and expands, now calling themselves the Marvelettes.",
    "imgSrc": marvelettes,
    "title": formattedChapters["marvelettes"],
    "navYear": "1940",
  },
  {
    "chapterIndex": getChapterIndex("southAmerica"),
    "date": "1941",
    "description": "After years of performing together, Marie declines the offer to join the Marvelettes on tour in South America.",
    "imgSrc": southAmerica,
    "title": formattedChapters["southAmerica"],
  },
  {
    "chapterIndex": getChapterIndex("auditions"),
    "date": "1942",
    "description": 'Marie auditions at both the Roxy and Radio City Music Hall, the first glimpse at the opportunity to fulfill her dream of being "one or the other"– a Rockette or Roxyette.',
    "imgSrc": oneOrTheOther,
    "title": formattedChapters["auditions"],
  },
  {
    "chapterIndex": getChapterIndex("training"),
    "date": "1942",
    "description": "A month after her audition, a spot opens up at the Roxy. Marie lands the gig and fulfills her childhood dream. She begins her training on her 20th birthday at the Earle Theater in Washington, D.C.",
    "imgSrc": showUpAtRoxy,
    "title": formattedChapters["training"],
    "navYear": "1942",
  },
  {
    "chapterIndex": getChapterIndex("roxyette"),
    "date": "1942-1946",
    "description": "As a full-time dancer, Marie performed twice-a-day, seven days a week.",
    "imgSrc": roxyette,
    "title": formattedChapters["roxyette"],
    "navYear": "1942",
  },
  {
    "chapterIndex": getChapterIndex("fitModel"),
    "date": "1945",
    "description": "In addition to rehersals and performances, Marie also acts as the official fit model for the Roxy costumes. She joins the IATSE Labor Union as part of her expanded role.",
    "imgSrc": fitModel,
    "title": formattedChapters["fitModel"],
    "navYear": "1945",
  },
  {
    "chapterIndex": getChapterIndex("retirement"),
    "date": "1946",
    "description": "Marie falls ill with mastoiditis– a serious complication from an ear infection. The infection forces her to retire. \nAlthough it may have felt like an early retirement, few lasted as long as Marie did at the Roxy, due to the rigorous standards for the dancers as well as societal pressure on the girls.",
    "imgSrc": retirementParty,
    "title": formattedChapters["retirement"],
    "navYear": "1946",
  },
  {
    "chapterIndex": getChapterIndex("wedding"),
    "date": "1947",
    "description": "With Joe's graduation from St. John's Law School, the happy couple were free to marry. Marie Tracy becomes Marie Irwin on September 13, 1947.",
    "imgSrc": wedding,
    "title": formattedChapters["wedding"],
    "navYear": "1947",
  },
];