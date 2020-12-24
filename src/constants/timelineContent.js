import { scrapbookContent } from './scrapbookContent';
import { formattedChapters } from './formattedChapters';

const millerSisters = 'miller-sisters-recital.jpg';
const tracySisters = 'tracy-sister-recital.jpg';
const amesSisters = 'ames-sisters.jpg';
const graduation = 'graduation.jpeg';
const marvelettes = 'marvelettes-pyramid.png';
const southAmerica = 'south-america-crop.png';
const oneOrTheOther = 'one-or-the-other.png';
const showUpAtRoxy = 'thru-door.png';
const roxyette = 'roxyette-ball.png';
const fitModel = 'fit-model.jpg';
const retirementParty = 'bar-across-the-street.png';
const wedding = 'cropped-wedding.jpeg';

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
    "date": "Mar 1939",
    "description": "Took over as the fifth Ames Sister after one of the real sisters became pregnant. At 17, toured from New England to Chicago in this singing, dancing, and acrobatic act.",
    "imgSrc": amesSisters,
    "title": formattedChapters["amesSisters"],
    "navYear": "1939",
  },
  {
    "date": "June 1940",
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
    "chapterIndex": getChapterIndex("marvelettes"),
    "date": "Aug 1941",
    "description": "After years of performing together, Marie declines the offer to join the Marvelettes on tour in South America.",
    "imgSrc": southAmerica,
    "title": '"No" to South America',
  },
  {
    "chapterIndex": getChapterIndex("roxyette"),
    "date": "1942",
    "description": 'Marie auditions at both the Roxy and Radio City Music Hall, the first glimpse at the opportunity to fulfill her dream of being "one or the other"– a Rockette or Roxyette.',
    "imgSrc": oneOrTheOther,
    "title": '"One or the other"',
  },
  {
    "chapterIndex": getChapterIndex("training"),
    "date": "Feb 1942",
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
    "date": "Sept 1945",
    "description": "In addition to rehersals and performances, Marie also acts the official fit model for the Roxy costumes. She joins the IATSE Labor Union as part of her expanded role.",
    "imgSrc": fitModel,
    "title": "Fit Model",
  },
  {
    "chapterIndex": getChapterIndex("retirement"),
    "date": "Oct 1946",
    "description": "Marie falls ill with mastoiditis– a serious complication from an ear infection. The infection forces her into retirement. \nAlthough it may have felt like an early retirement, few lasted as long as Marie did at the Roxy, due to the rigorous standards for the dancers as well as societal pressure on the girls.",
    "imgSrc": retirementParty,
    "title": formattedChapters["retirement"],
    "navYear": "1946",
  },
  {
    "chapterIndex": getChapterIndex("wedding"),
    "date": "Sept 1947",
    "description": "With Joe's graduation from St. John's Law School, the happy couple were free to marry. Marie Tracy becomes Marie Irwin on September 13, 1947.",
    "imgSrc": wedding,
    "title": formattedChapters["wedding"],
    "navYear": "1947",
  },
];