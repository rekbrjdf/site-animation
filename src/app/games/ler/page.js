import React from 'react';
import LERfeature1 from 'public/img/games/ler/feature-1.svg';
import LERfeature2 from 'public/img/games/ler/feature-2.svg';
import LERfeature3 from 'public/img/games/ler/feature-3.svg';
import GamepageTemplate from '../../../components/adaptive/GamepageTemplate';

const pageData = {
  name: 'ler',
  buttonColor: 'linear-gradient(60.64deg, #1B5E3F 23.31%, #269A64 86.5%)',
  accentColor: ['#022213', '#20844A'],
  title: 'Live Roulette',
  poster: '/img/games/ler/ler-poster.jpg',
  bluredPoster: '/img/games/ler/blured.jpg',
  slogans: {
    desktop: {
      sloganTitle: 'Red or Black? The Choice is Yours',
      slogan:
        "Experience the thrill of Live Roulette \nwith ATMOSFERA's latest version 2.0. Our \nrevamped interface ensures seamless \ngameplay, while new features \nenhance interaction and accessibility.",
      overview:
        'Step into the world of European Roulette, \nwhere anticipation meets strategy. Predict \nwhere the ball lands and revel in the \nexhilaration of winning.',
      demoSlogan: (() => (
        <>
          Dive into the world of Live Roulette <br />
          and let the wheel decide your fate. <br />
          <span className="white-text"> Take the demo for a spin!</span>
        </>
      ))(),
    },
    mobile: {
      sloganTitle: 'Red or Black? \nThe Choice is Yours',
      slogan:
        "Experience the thrill of Live \nRoulette with ATMOSFERA's \nlatest version 2.0. \n\nOur revamped interface \nensures seamless \ngameplay, while new features enhance \ninteraction and accessibility.",
      overview:
        'Step into the world of \nEuropean Roulette, where \nanticipation meets strategy. \nPredict where the ball lands \nand revel in the exhilaration of \nwinning.',
      demoSlogan: (() => (
        <>
          Dive into the world of Live <br />
          Roulette and let the wheel <br />
          decide your fate.
          <span className="white-text">
            {' '}
            Take the <br />
            demo for a spin!
          </span>
        </>
      ))(),
    },
  },
  features: [
    {
      title: 'High quality \nbroadcast',
      icon: LERfeature1,
    },
    {
      title: 'Detailed \ngame statistics',
      icon: LERfeature2,
    },
    {
      title: 'Professional \ngame presenters',
      icon: LERfeature3,
    },
  ],
  specs: [
    [
      {
        title: 'How to Play',
      },
      {
        title: 'Roulette Wheel & Ball',
      },
      {
        title: 'Field & Betting',
      },
      {
        title: 'Track Field & Special Bets',
      },
    ],
    [
      {
        description:
          'Bet on where the ball will land after a spin. With various betting options and flexible limits, the game offers endless possibilities.',
      },
      {
        description:
          'Explore the intricacies of the wheel and its 37 numbered cells, each holding the promise of fortune.',
      },
      {
        description:
          'From Straight bets on individual numbers to external bets covering ranges, explore diverse betting strategies.',
      },
      {
        description:
          'Discover additional betting options like Neighbors and Orphelins for a deeper engagement with the game.',
      },
    ],
  ],
};

export default () => <GamepageTemplate {...pageData} />;
