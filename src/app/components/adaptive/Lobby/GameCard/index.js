import React from 'react';
import Link from 'next/link';
import { bindClasses } from 'utils/functions';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'container');

export default function GameCard(props) {
  const { highResImg, lowResImg, link, tags, isOnline, name } = props;
  return (
    <div className={classes.container}>
      <Link href={link} className={bc.__link}>
        <picture className={bc.__image}>
          <source srcSet={lowResImg} media="(min-width: 299px) and (max-width: 800px)" />
          <source srcSet={highResImg} media="(min-width: 801px)" />
          <img src={highResImg} alt="" />
        </picture>
        <div className={bc.__card}>
          <div className={bc.__top}>
            {tags && (
              <div className={bc.__tags}>
                {tags.map((tag) => (
                  <div key={tag} className={bc.__tag}>
                    {tag}
                  </div>
                ))}
              </div>
            )}
            {isOnline && (
              <div className={bc.__online}>
                <span className={bc.__title}>Live Broadcast</span>
              </div>
            )}
          </div>
          <span className={bc.__name}>{name}</span>
        </div>
      </Link>
    </div>
  );
}
