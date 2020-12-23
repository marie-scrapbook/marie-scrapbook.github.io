const img = {
  'adler': 'scrapbook/adler.jpeg',
  'amesSisters': 'timeline/ames-sisters.jpg',
  'beachheadBelle': 'scrapbook/beachhead-belle.jpg',
  'bicycles': 'scrapbook/bicycles.jpeg',
  'dcLineUp': 'scrapbook/earle-dances.png',
  'graduation': 'timeline/graduation.jpeg',
  'earleTheatre': 'scrapbook/earlePage.png',
  'engagementParty': 'scrapbook/BarAcrossStreet.jpg',
  'marvelettes': 'scrapbook/six-marvelettes.jpg',
  'millerSisters': 'scrapbook/miller-sisters.png',
  'millerSistersJuniorRecital': 'scrapbook/junior-recital.png',
  'millerSistersLastRecital': 'scrapbook/miller-sisters-last-recital.jpg',
  'nedWayburn': 'scrapbook/ned-wayburn.jpg',
  'photoshoot': 'scrapbook/photoshoot.png',
  'purpleHeart': 'scrapbook/purpleHeart.png',
  'retirement': 'timeline/bar-across-the-street.png',
  'roxyMemories1': 'scrapbook/roxyMemories1.jpg',
  'roxyette': 'scrapbook/ColorSpread.jpg',
  'roxyetteCloseUp': 'scrapbook/ColorSpread003.jpg',
  'shorePatrol': 'scrapbook/presBall.jpg',
  'shoeCapt': 'scrapbook/shoeCapt.jpeg',
  'showGirlContract': 'scrapbook/showGirlContract.jpg',
  'telegrams': 'scrapbook/RoxyTelegrams.jpg',
  'thruTheseDoors': 'scrapbook/earleTheater.jpg',
  'tracySisters': 'timeline/tracy-sister-recital.jpg',
  'tracySistersProgram': 'scrapbook/tracy-sisters-program.jpg',
  'weddingCard': 'timeline/wedding-card.jpg',
  'weddingParty': 'scrapbook/wedding-party.jpeg',
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
    "caption": 'Clockwise from left: Marie is second from the right ("Me"), top row second from the right, and second from the left (performing as a boy)',
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
    "chapter": "training",
    "date": "1942",
    "imgSrc": img.earleTheatre,
    "title": "Arriving at the Earle Theatre",
    "transcription":
      "This is very important for me. 'Come as soon as possible. Miss Cody'– that's from the Roxy. I didn't rehearse with them. They sent me to Washington to break in. They had a line in the Earle Theatre in Washington. That's where I lived until Easter. That was my 20th birthday. I got there at noontime, I went in on the train, and I went in the last show at night. Learned the routine and everything else. I don't know how I did it. I must have been good.",
  },
  {
    "chapter": "training",
    "date": "1942",
    "imgSrc": img.dcLineUp,
    "title": "Washington Routine",
    "transcription": "We did about 5 numbers. I rehearsed every day, every day, every day. We rehearsed while the movie was on. Here's all the routines we did. I had to learn all this down there. Shore Patrol, bicycle, stilts– I had to learn how to walk on stilts–, soft shoe, and fencing.",
  },
  {
    "chapter": "training",
    "date": "1942",
    "imgSrc": img.bicycles,
    "title": "Dancing on bikes",
    "transcription": "I knew how to ride a bicycle. But we did all the formations on a bicycle holding one hand. You had to break it so I'd go forward and she'd go back. There were no breaks on the bikes. It was all controlled with your feet.",
  },
  {
    "chapter": "training",
    "date": "1942",
    "imgSrc": img.shorePatrol,
    "title": "The President's Ball",
    "transcription": "And the Shore Patrol, that was a tough one too. The President's ball, look at that. [... not sure how to include FDR note ...] Well, we were down in Washington.",
  },
  {
    "chapter": "roxyette",
    "date": "1942",
    "imgSrc": img.roxyMemories1,
    "title": "Life at the Roxy",
    "transcription": "Now we're up in New York. Now I'm called to New York. I'll tell you why I was called to New York– they closed the Earle Theatre. And they brought all the Roxyettes home. So some of us made it up here and some of us didn't.",
  },
  {
    "chapter": "roxyette",
    "date": "1942",
    "imgSrc": img.shoeCapt,
    "title": "Shoe Captain",
    "transcription": "I was shoe captain. We had lockers and lockers of pink shoes, red shoes, green shoes. 'Alright, next show we need red shoes, everyone go down to Marie– Tracy, my name was– and get shoes.' I had to listen to everybody: 'these are too small,' 'these are too big,' and everything else. Anyhow, I had that job. You got no pay for it.",
  },
  {
    "chapter": "roxyette",
    "date": "1942",
    "imgSrc": img.adler,
    "title": "The hairdresser",
    "transcription": "Earnest Adler, he was the hairdresser. Everyone had to wear their hair the same. And he dressed my hair for the wedding, my own wedding.",
  },
  {
    "chapter": "roxyette",
    "date": "1942",
    "imgSrc": img.purpleHeart,
    "title": "Purple Heart Recipient",
    // "transcription":
    //   "I got the purple heart for a fencing number. I got hurt.",
  },
  {
    "chapter": "roxyette",
    "date": "1943",
    "imgSrc": img.roxyette,
    "title": "On the ball",
    // "transcription": "36 I think the line was. And then, Christmastime, they'd hire more. There were more on the line. // 'Night of Stars', that's the one. You've got twenty thousand MSG to see the tenth annual... United Jewish Appeal. Danny K, Henny,.. Bill Robinson. That was a great night. Yeah, we did that a couple of years.",
    "transcription": 
      "[0:39] This was in the middle of the NY News, the Sunday News. Now that'll tell ya where each girl comes from. See, Marie Tracy, Elmhurst, New York, Long Island, Queens. That's me right there. Fourth.",
  },
  {
    "chapter": "roxyette",
    "date": "1943",
    "imgSrc": img.roxyetteCloseUp,
    "title": "On the ball",
    "transcription":
      "That was a tough number. Those balls were made of plaster; heavy, you couldn't lift them up. You'd have to roll them and you had to work mostly on your heels– no– your toes to roll them and then you stop them on your heels, you know, you'd balance back and forth. And we'd weave in formation, circles, squares, rounds. That was a tough number. We were famous for that one, Rockettes were famous for their kicks. We were famous for bicycles, the roller skates, we did a number on roller skates... we did more tricks than Music Hall. We were more agile.",
  },
  {
    "chapter": "roxyette",
    "date": "1946",
    // "description":
    //   'Caption reads: "Look, but brother thats all. Says John Shea SP(G)3rd class of Ordinance, when referring to the lovely, back home in Elmhurst, Long Island, N. Y. The name is Marie Tracy (No relation to the comic strip detective)"',
    "imgSrc": img.beachheadBelle,
    "title": "Look but brother, that's all",
    "transcription":
      "[0:42] This is when we had a little newspaper we put out for the soldiers and sailors and every once in a while they'd put in a pinup girl and I was chosen one time to be a pinup girl. And we sent it in that magazine. So I was in somebody's locker. ([0:45] Ned: 'So all the girls did these?') No, well, the war was over right after this. No, I think only like four of us.",
  },
  {
    "chapter": "roxyette",
    "date": "1946",
    "imgSrc": img.photoshoot,
    "title": "Working with Murray Korman",
    "transcription":
      "[0:43] When they sent me for that pinup picture, this was a very famous photographer. I remember, I had to go down in a cab, they put me in a cab and sent me down there. Murray Korman, He was very famous. I just went where they sent me. (Ned: 'That's quite a bracelet you have on there.') Oh yeah, it was all fabric."
  },
  {
    "chapter": "fitModel",
    "date": "1946",
    "imgSrc": img.showGirlContract,
    "title": "$10 raise",
    "transcription":
      "1946? That's when they made me a showgirl. Instead of dancing, one of the show girls was missing. Show girls are all 6 footers and they parade around in costumes. $85 a week... wow, that was a lot of money. That's when they built the costumes on me for the sample to see if it would work. They'd send me out front to the chairman to see if he likes it. If he'd approve them, and then they'd make 36 of 'em.",
  },
  {
    "chapter": "retirement",
    "date": "1946",
    "imgSrc": img.getWellSoon,
    "transcription":
      "Is this when I was sick? Yeah, this is when I got sick. That was the end of me.",
  },
  {
    "chapter": "retirement",
    "date": "1946",
    "imgSrc": img.honorableWithdrawal,
    "transcription":
      "That's the end of my career, yeah.",
  },
  {
    "chapter": "wedding",
    "date": "1947",
    "imgSrc": img.engagementParty,
    "title": "Engagement party",
    "transcription":
      "This is my engagement party. What does that say?... oh, it was [Rita's], I thought it was mine. That's across the street where the boys used to wait for us. Our boyfriends used to wait for us until the last show was done at 11:30 or 11. Run across the street to the bar and we'd meet them.",
  },
  {
    "chapter": "wedding",
    "date": "1947",
    "description":
     "Marie Tracy becomes Marie Irwin on September 13, 1947",
    "imgSrc": img.weddingParty,
    "transcription":
      "[44] It was September '43, he was just gonna start law school. So I stayed working and he went to law school."
  },
];