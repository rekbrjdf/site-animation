import React from 'react';
import BaccaratFeature1 from 'public/img/games/baccarat/feature-1.svg';
import BaccaratFeature2 from 'public/img/games/baccarat/feature-2.svg';
import BaccaratFeature3 from 'public/img/games/baccarat/feature-3.svg';
import GamepageTemplate from '../../../components/adaptive/GamepageTemplate';

const pageData = {
  name: 'baccarat',
  buttonColor: 'linear-gradient(90deg, #7F4C00 -32.81%, #E58900 100%)',
  accentColor: ['#4A1E12', '#D53900'],
  title: 'Speed Baccarat',
  poster: '/img/games/baccarat/baccarat-poster.jpg',
  bluredPoster: '/img/games/baccarat/blured.jpg',
  slogans: {
    desktop: {
      sloganTitle: 'Double the Modes, Triple the Fun',
      slogan:
        'We are welcoming you to our new luxury \nstudio with a classic speed Baccarat game \nand stylish atmosphere. Сharismatic game \npresenters, side bets and two game modes \nare waiting for you!',
      overview:
        'Baccarat is an ancient card game that remains \none of the most popular games in casinos \nworldwide. Despite its simple rules, Baccarat \nis a very dynamic game that keeps you on the \nedge of your seat until the very end!',
      demoSlogan: (() => (
        <>
          Join us for non-stop excitement and round- <br />
          the-clock gameplay!
          <span className="white-text"> Give the demo a try!</span>
        </>
      ))(),
    },
    mobile: {
      sloganTitle: 'Winning is \nin your cards',
      slogan:
        'Welcome to our luxurious \nstudio featuring the classic \ngame of Blackjack and a \nresponsive interface design. \n\nJoin us for an unforgettable \nexperience with attractive \ngame presenters and multi-\nseats awaiting you!',
      overview:
        'Step into the world of \nBlackjack, a game loved \nby players worldwide for its \nspeed and simplicity. Join \nATMOSFERA Blackjack for \na dynamic and thrilling \nexperience.',
      demoSlogan: (() => (
        <>
          Join us for non-stop <br />
          excitement and round-the-
          <br />
          clock gameplay!
          <span className="white-text">
            {' '}
            Give the <br />
            demo a try!
          </span>
        </>
      ))(),
    },
  },
  features: [
    {
      title: `Lucky \nSix`,
      icon: BaccaratFeature1,
    },
    {
      title: 'Side \nBets',
      icon: BaccaratFeature2,
    },
    {
      title: 'Classic \nor No Commission',
      icon: BaccaratFeature3,
    },
  ],
  specs: [
    [
      {
        title: 'How to Play',
      },
      {
        title: 'Main Game',
      },
    ],
    [
      {
        description:
          'Bet on where the ball will land on the roulette wheel. Choose from various betting options and place your chips before the timer runs out. If the ball lands on your chosen number or within your selected range, you win!',
      },
      {
        description:
          'Bet on individual numbers or groups of numbers, each with different payout odds. The roulette wheel consists of 37 numbered cells, including red, black, and green (Zero). Place your bets strategically and watch as the wheel spins to reveal the winning number.',
      },
    ],
  ],
};

export default () => <GamepageTemplate {...pageData} />;
