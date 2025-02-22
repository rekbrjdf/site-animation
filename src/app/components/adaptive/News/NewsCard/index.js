import React from 'react';
import { bindClasses } from 'utils/functions';
import Link from 'next/link';
import Image from 'next/image';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'news-card');

function NewsCard({ label, title, date, id, pic }) {
  return (
    <Link className={bc.__link} href={'#'}>
      <div className={classes['news-card']}>
        <div className={bc['__flex-top']}>
          <Image
            src={pic}
            quality={100}
            fill
            alt="picture of the news"
            loading="lazy"
            sizes="100%"
          />
        </div>
        <div className={bc.__label}>{label}</div>
        <div className={bc['__flex-bottom']}>
          <time className={bc.__date}>{date}</time>
          <p className={bc.__title}>{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
