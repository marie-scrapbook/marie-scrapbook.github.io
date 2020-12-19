const img = {
  'amesSisters': 'timeline/ames-sisters.jpg',
  'graduation': 'timeline/graduation.jpeg',
  'marvelettes': 'timeline/marvelettes-pyramid.png',
  'millerSisters': 'scrapbook/miller-sisters.png',
  'millerSistersRecital': 'timeline/miller-sisters-recital.jpg',
  'nedWayburn': 'scrapbook/ned-wayburn.jpg',
  'retirement': 'timeline/bar-across-the-street.png',
  'roxyette': 'timeline/roxyette-ball.png',
  'tracySisters': 'timeline/tracy-sister-recital.jpg',
  'weddingCard': 'timeline/wedding-card.jpg'
}

const audio = {
  'millerSisters': 'miller-sisters.mp3',
  'tracySisters': 'tracy-sisters.mp3',
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
    "imgSrc": img.millerSistersRecital,
    "title": "Junior Recital"
  },
  {
    "chapter": "nedWayburn",
    "imgSrc": img.nedWayburn,
    "title": "Placeholder: Ned Wayburn"
  },
  {
    "audioSrc": audio.tracySisters,
    "caption": 'Marie is center; the tallest. Her sister Ann is second from the left.',
    "chapter": "tracySisters",
    "date": "1937",
    "imgSrc": img.tracySisters,
    "title": "Backyard Recital",
    "transcription": 
      "Oh, this is my dancing school... My mother made most of the costumes. That's me, the teacher. We were doing one of the fairy tales, as you can see. This is Ann, my sister Ann. Patricia was the pianist. This is our backyard in Elmhurst. Ann tap danced but... she knew everything, she was a pain in the neck so we threw her out. I don't think she liked it. I wound up with like 100. It snowballed. Because it was 25¢ a lesson. When I look back now, it must have hurt the Miller Sisters. This was a time when Shirley Temple was starting to come up. Everyone wanted a Shirley Temple."
  },
  {
    "chapter": "amesSisters",
    "date": "March 1939",
    "imgSrc": img.amesSisters,
    "title": "On the road",
    "transcription":
      "I did two years with the Ames Sisters and the Marvelettes. I was on the road for two years.",
  },
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
    "chapter": "marvelettes",
    "date": "1940",
    "imgSrc": img.marvelettes,
    "title": "On the road",
    "transcription":
      "I did two years with the Ames Sisters and the Marvelettes. I was on the road for two years.",
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