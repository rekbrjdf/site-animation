import React from 'react';
import Link from 'next/link';
import { bindClasses } from 'utils/functions';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'post');

export default function Post({ post }) {
  const { id, preview, publish, title, feedback, tags = ['team', 'ceo'] } = post;
  const date = new Date(publish);
  const {
    formats: { thumbnail, small, medium },
  } = preview;
  const lowResImg = small || thumbnail;
  const highResImg = medium || thumbnail;
  return (
    <div className={classes.post}>
      <div className={bc['__description-container']}>
        <span className={bc.__date}>
          {`${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`}
        </span>
        <span className={bc.__title}>{title}</span>
        <span className={bc.__description}>{post.preview_article}</span>
        <div className={bc['__link-container']}>
          <Link className={bc.__link} href={`/blog/${id}`}>
            Read More
          </Link>
          {feedback && (
            <Link href="/contacts" className={bc.__link}>
              Book a meeting
            </Link>
          )}
        </div>
      </div>
      <div className={bc['__image-container']}>
        {lowResImg && highResImg && (
          <picture className={bc.__picture}>
            <source srcSet={lowResImg.url} media="(min-width: 299px) and (max-width: 800px)" />
            <source srcSet={highResImg.url} media="(min-width: 801px)" />
            <img
              src="https://i.pinimg.com/originals/cf/b8/75/cfb875ac3b1c8575b051af65e3f00488.png"
              alt=""
            />
          </picture>
        )}

        <div className={bc['__tags-container']}>
          {tags.map((tag) => (
            <div key={tag} className={bc.__tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
