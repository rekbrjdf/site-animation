import React from 'react';
import { bindClasses } from 'utils/functions';
import classes from './styles.module.scss';
import GameCard from './GameCard';
import GAMES from '../../../../config';

const bc = bindClasses(classes, 'container');

export default function Lobby() {
  return (
    <div className={classes.container}>
      <span className={bc.__title}>Game Selection</span>
      <div className={bc['__game-container']}>
        {GAMES.map(({ name, highResImg, lowResImg, tags, link }) => (
          <GameCard
            link={link}
            highResImg={highResImg.src}
            lowResImg={lowResImg.src}
            tags={tags}
            name={name}
            isOnline
            key={name}
          />
        ))}
      </div>
    </div>
  );
}
