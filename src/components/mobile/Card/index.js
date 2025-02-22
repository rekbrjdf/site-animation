import React from 'react';
import { bindClasses } from 'utils/functions';
import cn from 'classnames';
import Image from 'next/image';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'card');

function Card({ title, paragraph, image, className = [] }) {
  return (
    <div className={cn(classes.card, className)}>
      <div className={bc.__header}>
        {image && (
          <Image className={bc['__background-image']} alt={title} src={`/img/${image}`} fill />
        )}
        <h3 className={bc.__title}>{title}</h3>
      </div>
      <div className={bc.__body}>
        <p className={bc.__paragraph}>{paragraph}</p>
      </div>
    </div>
  );
}

export default Card;
