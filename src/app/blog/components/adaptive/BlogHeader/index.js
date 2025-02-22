'use client';

import React from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import { bindClasses } from 'utils/functions';
import Link from 'next/link';
// eslint-disable-next-line import/no-unresolved
import ArrowComponent from 'public/icons/arrow.svg?component';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'news-header');

const NewsHeader = ({ avatar, title, date, author, position, tag }) => (
  <div className={classnames(classes['news-header'])}>
    <div className={bc.__wrapper}>
      <Link className={bc.__link} href="/blog">
        <ArrowComponent className={bc.__icon} />
      </Link>
      <div className={bc.__title}>{title}</div>
      <div className={bc.__info}>
        <div className={bc.__img}>
          <Image src={avatar.url} alt="icon" width={82} height={82} />
        </div>
        <div className={bc.__content}>
          <span>{author}</span>
          <p>{position}</p>
        </div>
        <div className={bc.__content}>
          <span>{tag}</span>
          <p>{date}</p>
        </div>
      </div>
    </div>
  </div>
);

export default NewsHeader;
