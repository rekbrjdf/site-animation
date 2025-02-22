import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { bindClasses, getApiHost } from 'utils/functions';
import NewsCard from './NewsCard';
import classes from './styles.module.scss';
import Arrow from './arrow-right.svg';

const bc = bindClasses(classes, 'news');
async function News({ titleMain }) {
  const news = await (await fetch(`${getApiHost()}/news-posts?_sort=publish:DESC&_limit=3`)).json();

  return (
    <div className={classes.news}>
      <div className={bc.__header}>
        <h2 className={bc.__title}>{titleMain || 'Hot News'} </h2>
        {!titleMain && (
          <Link className={bc.__link} href="/blog">
            <p>All News</p>
            <div className={bc['__link-button']}>
              <Image src={Arrow} alt="go to news page" />
            </div>
          </Link>
        )}
      </div>

      <div className={bc.__wrapper}>
        {news.map(({ id, title, news_category: { title: label }, publish, preview: { url } }) => {
          const date = new Date(publish).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          return <NewsCard key={id} title={title} label={label} date={date} id={id} pic={url} />;
        })}
      </div>
    </div>
  );
}

export default News;
