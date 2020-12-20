const img = {
  'amesSisters': 'timeline/ames-sisters.jpg',
  'graduation': 'timeline/graduation.jpeg',
  'marvelettes': 'scrapbook/six-marvelettes.jpg',
  'millerSisters': 'scrapbook/miller-sisters.png',
  'millerSistersJuniorRecital': 'timeline/miller-sisters-recital.jpg',
  'millerSistersLastRecital': 'scrapbook/miller-sisters-last-recital.jpg',
  'nedWayburn': 'scrapbook/ned-wayburn.jpg',
  'retirement': 'timeline/bar-across-the-street.png',
  'roxyette': 'scrapbook/ColorSpread.jpg',
  'tracySisters': 'timeline/tracy-sister-recital.jpg',
  'tracySistersProgram': 'scrapbook/tracy-sisters-program.jpg',
  'weddingCard': 'timeline/wedding-card.jpg'
}

const audio = {
  'amesSisters': 'and-i-was-an-ames-sister.mp3',
  'millerSisters': 'miller-sisters.mp3',
  'millerSistersLastRecital': 'miller-sisters-last.mp3',
  'nedWayburn': 'ned-wayburn.mp3',
  'tracySisters': 'tracy-sisters.mp3',
  'tracySistersProgram': 'tracy-sisters-program.mp3',
  'graduation': 'during-high-school.mp3'
}

export const scrapbookContent = [
  {
    "audioSrc": audio.millerSisters,
    "caption": 'Inscription reads: "Best wishes to Marie from her teachers, Madeline and Paula Miller"',
    "chapter": "millerSisters",
    "date": "1930",
    "imgSrc": img.millerSisters,
    "title": "First dancing teachers",
    "transcription": 
      'When I was about 8 years old, I was a sickly kid, so the doctor said "Send her to dancing school to build her up". So I went to dancing school and these were my first teachers: The Miller Sisters. Paula and Madeline. Madeline was the dancing teacher and Paula was the [piano] teacher. Patricia took lessons from Paula. I must have stayed with them until 8th grade at school, because then I opened my own school.'
  },
  {
    "caption": '"Miller Sisters Studio of Music and Dance". Marie is second from the left.',
    "date": "1938",
    "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id imperdiet ante. Nulla at vulputate dui. Suspendisse commodo nunc massa, at gravida metus imperdiet id.',
    "chapter": "millerSisters",
    "imgSrc": img.millerSistersJuniorRecital,
    "title": "Junior Recital"
  },
  {
    "audioSrc": audio.millerSistersLastRecital,
    "caption": 'Marie is first from the left.',
    "date": "1938",
    "chapter": "millerSisters",
    "imgSrc": img.millerSistersLastRecital,
    "title": "Last Recital",
    "transcription": "That must have been the last show I was in, with the Miller Sisters. Then I went on to Ned Wayburn's school..."
  },
  {
    "audioSrc": audio.nedWayburn,
    "caption": "Marie is on the top row, second from the right ('Me'). Her friend Florence stands next to her.",
    "chapter": "nedWayburn",
    "date": "1936",
    "imgSrc": img.nedWayburn,
    "transcription": "When I got enough money from teaching dancing, I went to a better school, I went to a dancing school in New York: Ned Wayburn. That's where I put my money. I used to go into the subway with my girlfriend, Florence Birkan. I wonder... I dated her brother. We used to go in the subway together on Saturdays. And there were triplets in that class; which I'll never be able to find now."
  },
  {
    "audioSrc": audio.tracySisters,
    "caption": 'Marie is center; the tallest. Her sister Ann is second from the left.',
    "chapter": "tracySisters",
    "date": "1935",
    "imgSrc": img.tracySisters,
    "title": "Backyard Recital",
    "transcription": 
      "Oh, this is my dancing school... My mother made most of the costumes. That's me, the teacher. We were doing one of the fairy tales, as you can see. This is Ann, my sister Ann. Patricia was the pianist. This is our backyard in Elmhurst. I wound up with like 100. It snowballed. Because it was 25¢ a lesson. When I look back now, it must have hurt the Miller Sisters. This was a time when Shirley Temple was starting to come up. Everyone wanted a Shirley Temple."
  },
  {
    "audioSrc": audio.tracySistersProgram,
    "chapter": "tracySisters",
    "date": "1935",
    "imgSrc": img.tracySistersProgram,
    "title": "First Spring Recital",
    "transcription": 
      "And this is the program... First recital: Patricia and Marie Tracy at 7:30PM. We rented a hall. We did baby acrobatics, we did waltz clog (that's tap dancing). Ann tap danced but... she knew everything, she was a pain in the neck so we threw her out. I don't think she liked it."
  },
  {
    "audioSrc": audio.amesSisters,
    "caption": "Marie replaced the Ames sister in the middle",
    "chapter": "amesSisters",
    "date": "March 1939",
    "imgSrc": img.amesSisters,
    "title": "On the road",
    "transcription":
      "Now the Ames Sisters! That was when I was in high school. I went to another dancing studio. It was just acrobatic work and we had an Arabian teacher, Hansi. There were 5 real Ames Sisters and one of them, she got married and she got pregnant so they had all these bills to fill. They had been in the business a long time, the mother, the father were the managers, and the mother made the costumes. So they had to fill the bill that they had contracted for. So Hansi said take her; I was pretty much the same size. I looked something like some of them. So they put me in the costumes and taught me the routines and I was an Ames sister.",
  },
  // {
  //   "chapter": "amesSisters",
  //   "date": "March 1939",
  //   "imgSrc": img.amesSisters,
  //   "title": "On the road",
  //   "transcription":
  //   "We played all kinds of different benefits and shows. The father had a big pack-up car, the top had a ... we were all jammed in there, a whole flock of us.",
  // },
  {
    "audioSrc": audio.graduation,
    "chapter": "graduation",
    "date": "June 1940",
    "imgSrc": img.graduation,
    "title": "Newtown High School Class of 1940",
    "transcription":
      "During high school I was doing my homework at night while we were working the shows. I had my own dancing school on Saturdays, and then we would get gigs. The Masons would have a big banquet and they'd hire a couple of acts, or Jewish weddings would have a couple of acts..."
  },
  {
    "caption": "From left to right: Marie, an original Ames Sister, Joan, a new girl, the second Ames Sister, and another new girl",
    "chapter": "marvelettes",
    "date": "1940",
    "imgSrc": img.marvelettes,
    "title": "Growing into a new group",
    "transcription":
      "This is the Marvelettes now. Some of the Ames sisters are in here. These two are Ames sisters, and I was an Ames sister, and we picked up another two. This is the girl from Dobbs Ferry, Joan, I even remember her name.",
  },
  {
    "chapter": "roxyette",
    "date": "1942",
    "imgSrc": img.roxyette,
    "title": "Life at the Roxy",
    "transcription":
      "Working with Gae Foster",
  },
  {
    "chapter": "retirement",
    "date": "1942",
    "imgSrc": img.retirement,
    "title": "Purple Heart Recipient",
    "transcription":
      "Girls made me a purple heart for being injured in the line of duty",
  },
  {
    "chapter": "wedding",
    "date": "1947",
    "imgSrc": img.weddingCard,
    "title": "From all of us",
    "transcription":
      "Wedding shower gift from the girls",
  },
];