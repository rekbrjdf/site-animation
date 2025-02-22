import React from 'react';
import BJfeature1 from 'public/img/games/bj/feature-1.svg';
import BJfeature2 from 'public/img/games/bj/feature-2.svg';
import BJfeature3 from 'public/img/games/bj/feature-3.svg';
import GamepageTemplate from '../../../components/adaptive/GamepageTemplate';

const pageData = {
  name: 'bj',
  buttonColor: 'linear-gradient(180deg, #4B2B22 0%, #341C16 100%)',
  accentColor: ['#331E18', '#843B26'],
  title: 'BlackJack',
  poster: '/img/games/bj/bj-poster.jpg',
  bluredPoster: '/img/games/bj/blured.jpg',
  slogans: {
    desktop: {
      sloganTitle: 'Winning is in your cards',
      slogan:
        'Welcome to our luxurious studio featuring the \nclassic game of Blackjack and a responsive \ninterface design. Join us for an unforgettable \nexperience with attractive game presenters \nand multi-seats awaiting you!',
      overview:
        'Step into the world of Blackjack, a game \nloved by players worldwide for its speed and \nsimplicity. Join ATMOSFERA Blackjack for a \ndynamic and thrilling experience.',
      demoSlogan: (() => (
        <>
          Take a seat and let the cards <br />
          decide your destiny.
          <span className="white-text">
            {' '}
            Test your luck <br />
            with the demo!
          </span>
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
          Take a seat and let the cards <br />
          decide your destiny.
          <span className="white-text">
            {' '}
            Test your luck <br />
            with the demo!
          </span>
        </>
      ))(),
    },
  },
  features: [
    {
      title: `Multi-seat \nOptions`,
      icon: BJfeature1,
    },
    {
      title: 'Classic \nside bets',
      icon: BJfeature2,
    },
    {
      title: 'Luxury \nstudio',
      icon: BJfeature3,
    },
  ],
  specs: [
    [
      {
        title: 'How to Play',
      },
      {
        title: 'Participation',
      },
      {
        title: 'Bonus Cards',
      },
    ],
    [
      {
        description:
          'Score more points than the dealer without exceeding 21. Achieve Blackjack, the highest hand with a score of 21 with your initial two cards.',
      },
      {
        description:
          'Take a free seat at the table and place a bet equal to or exceeding the minimum. Occupy up to 7 seats and bet the same amount for each.',
      },
      {
        description: (() => (
          <>
            <span className="white-text">Discover the thrill of Bonus Cards!</span> <br />
            <br /> Each deck includes 39 Blue (Silver) and 13 Yellow (Golden) cards. These special
            cards act as multipliers: Blue = x2, Yellow = x5. Multiply your potential payout with
            these cards, with multiple multipliers multiplying each other. <br /> <br />
            To participate in the Bonus Round, players must switch to Bonus Mode by paying a fee
            equal to the sum of their main bets.
          </>
        ))(),
      },
    ],
  ],
};

export default () => <GamepageTemplate {...pageData} />;
