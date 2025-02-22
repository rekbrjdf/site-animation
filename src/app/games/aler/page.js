import React from 'react';
import ALERfeature1 from 'public/img/games/aler/feature-1.svg';
import ALERfeature2 from 'public/img/games/aler/feature-2.svg';
import ALERfeature3 from 'public/img/games/aler/feature-3.svg';
import GamepageTemplate from '../../../components/adaptive/GamepageTemplate';

const pageData = {
  name: 'aler',
  buttonColor: 'linear-gradient(193.39deg, #B5432B 6.61%, #862511 90.62%)',
  accentColor: ['#331E18', '#862511'],
  title: 'Auto Roulette',
  poster: '/img/games/aler/aler-poster.jpg',
  bluredPoster: '/img/games/aler/blured.jpg',
  slogans: {
    desktop: {
      sloganTitle: 'Instant Wins with High-Speed Roulette!',
      slogan:
        'Experience the excitement of Auto Roulette, \nwhere every spin brings a rush of adrenaline \nand the chance to win big. Dive into the action \nwith our innovative features designed to \nenhance your gaming experience.',
      overview:
        'Auto Roulette offers the thrill of European \nRoulette with the convenience of automated \ngameplay. Predict where the ball will land \nand watch the wheel spin for your chance \nto win big!',
      demoSlogan: (() => (
        <>
          Join us for non-stop excitement and round- <br />
          the-clock gameplay!
          <span className="white-text"> Give the demo a try!</span>
        </>
      ))(),
    },
    mobile: {
      sloganTitle: 'Instant Wins with High-\nSpeed Roulette!',
      slogan:
        'Experience the excitement of \nAuto Roulette, where every \nspin brings a rush of adrenaline \nand the chance to win big. \n\nDive into the action with our \ninnovative features designed to \nenhance your gaming \nexperience.',
      overview:
        'Auto Roulette offers the thrill \nof European Roulette with the \nconvenience of automated \ngameplay. \n\nPredict where the ball will land \nand watch the wheel spin for \nyour chance to win big!',
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
      // 'Join us for non-stop \nexcitement and round-the-\nclock gameplay! Give the \ndemo a try!',
    },
  },
  features: [
    {
      title: 'Offline Casino \nAtmosphere',
      icon: ALERfeature1,
    },
    {
      title: 'Super-Fast \nRounds',
      icon: ALERfeature2,
    },
    {
      title: 'Maximum \nView',
      icon: ALERfeature3,
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
