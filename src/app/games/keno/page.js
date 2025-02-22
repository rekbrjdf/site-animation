import React from 'react';

import KENOfeature1 from 'public/img/games/keno/feature-1.svg';
import KENOfeature2 from 'public/img/games/keno/feature-2.svg';
import KENOfeature3 from 'public/img/games/keno/feature-3.svg';
import GamepageTemplate from '../../../components/adaptive/GamepageTemplate';

const pageData = {
  name: 'keno',
  buttonColor: 'linear-gradient(198.17deg, #3530D1 12.35%, #1C1988 95.75%)',
  accentColor: ['#1C1988', '#3D62B0'],
  title: 'Keno',
  poster: '/img/games/keno/keno-poster.jpg',
  bluredPoster: '/img/games/keno/blured.jpg',
  slogans: {
    desktop: {
      sloganTitle: 'Bet, Predict, Revel in Victory!',
      slogan:
        'Welcome to the world of Keno, where every \ndraw is an electrifying experience. Join us for \nthrilling gameplay enriched with features \ntailored to elevate your enjoyment.',
      overview:
        'Embark on a journey into the heart of Keno, \nwhere your predictions could lead to enormous \nwinnings. With flexible betting options and \nenticing payouts, each draw offers boundless \nopportunities for success!',
      demoSlogan: (() => (
        <>
          Ready to put your luck to the test? <br />
          <span className="white-text">Jump into the demo!</span>
        </>
      ))(),
    },
    mobile: {
      sloganTitle: 'Bet, Predict, Revel \nin Victory!',
      slogan:
        'Welcome to the world of Keno, \nwhere every draw is an \nelectrifying experience. \n\nJoin us for thrilling gameplay \nenriched with features tailored \nto elevate your enjoyment.',
      overview:
        'Embark on a journey into the \nheart of Keno, where your \npredictions could lead to \nenormous winnings. \n\nWith flexible betting options \nand enticing payouts, each \ndraw offers boundless \nopportunities for success!',
      demoSlogan: (() => (
        <>
          Ready to put your luck to the <br />
          test? 
          <span className="white-text"> Jump into the demo!</span>
        </>
      ))(),
    },
  },
  features: [
    {
      title: 'Free \nchoice',
      icon: KENOfeature1,
    },
    {
      title: 'Quick \nbets',
      icon: KENOfeature2,
    },
    {
      title: 'x10000 \npayout',
      icon: KENOfeature3,
    },
  ],
  specs: [
    [
      {
        title: 'How to Play',
      },
      {
        title: 'Stages of the Game',
      },
      {
        title: 'Betting History',
      },
    ],
    [
      {
        description:
          'Choose up to 10 numbers from 1 to 80 on your Keno card. The more accurate your predictions, the greater your rewards. Just remember not to exceed a total bet of $1,000 across all tickets.',
      },
      {
        description: (() => (
          <>
            <span className="white-text">Ticket Purchase: </span>Secure your Keno cards loaded with
            selected numbers and bet values. <br />
            <br />
            <span className="white-text">Live Draw: </span>
            Witness the excitement as the lotto machine randomly selects winning numbers. The more
            matches you achieve, the larger your prize!
          </>
        ))(),
      },
      {
        description:
          'Keep track of your gaming endeavors and revisit past victories within the Game History section.',
      },
    ],
  ],
};

export default () => <GamepageTemplate {...pageData} />;
