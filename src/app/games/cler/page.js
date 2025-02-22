import React from 'react';
import CLERfeature1 from 'public/img/games/cler/feature-1.svg';
import CLERfeature2 from 'public/img/games/cler/feature-2.svg';
import CLERfeature3 from 'public/img/games/cler/feature-3.svg';
import GamepageTemplate from '../../../components/adaptive/GamepageTemplate';

const pageData = {
  name: 'cler',
  buttonColor: 'linear-gradient(180deg, #1AC3DB 0%, #0C707E 100%)',
  accentColor: ['#313770', '#6E1083'],
  title: 'Cocktail Roulette',
  poster: '/img/games/cler/cler-poster.jpg',
  bluredPoster: '/img/games/cler/blured.jpg',
  slogans: {
    desktop: {
      sloganTitle: 'Bet, Sip, and Let the Roulette Roll!',
      slogan:
        'Welcome to the sophisticated world of \nCocktail Roulette, where elegance meets \nexhilaration. Join us for a unique live casino \nexperience filled with charm and rewards.',
      overview:
        'Step into the realm of Cocktail Roulette, \na game of chance and style that combines \nthe thrill of roulette with the allure of a high- \nend cocktail bar.',
      demoSlogan: (() => (
        <>
          Savor the taste of victory with Cocktail <br />
          Roulette.<span className="white-text"> Dive into the demo now!</span>
        </>
      ))(),
    },
    mobile: {
      sloganTitle: 'Bet, Sip, and Let \nthe Roulette Roll!',
      slogan:
        'Welcome to the sophisticated \nworld of Cocktail Roulette, \nwhere elegance meets \nexhilaration. \n\nJoin us for a unique live casino \nexperience filled with charm \nand rewards.',
      overview:
        'Step into the realm of Cocktail \nRoulette, a game of chance \nand style that combines the \nthrill of roulette with the allure \nof a high-end cocktail bar.',
      demoSlogan: (() => (
        <>
          Savor the taste of victory with <br />
          Cocktail Roulette.
          <span className="white-text">
            {' '}
            Dive into the <br />
            demo now!
          </span>
        </>
      ))(),

      // 'Savor the taste of victory with \nCocktail Roulette. Dive into the \ndemo now!',
    },
  },
  features: [
    {
      title: 'A Taste of \nElegance',
      icon: CLERfeature1,
    },
    {
      title: 'Shake Up \nYour Winnings',
      icon: CLERfeature2,
    },
    {
      title: 'Multiply \nYour Luck',
      icon: CLERfeature3,
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
        title: 'Bonus Bonanza',
      },
    ],
    [
      {
        description:
          'Place your bets and anticipate where the roulette wheel will land. Embrace the excitement as bonus numbers are randomly selected, offering the chance to multiply your winnings.',
      },
      {
        description:
          'Place your bets on the main layout or Track Field, and await the spin of the wheel to reveal your fate.',
      },
      {
        description:
          'Experience the thrill of the Shaker Bonus feature, where up to 4x winnings are up for grabs in a single round. With random bonus multipliers applied to sectors, your potential for big wins is amplified.',
      },
    ],
  ],
};

export default () => <GamepageTemplate {...pageData} />;
