import React, { forwardRef } from 'react';
import { bindClasses } from 'utils/functions';
import cn from 'classnames';
import Image from 'next/image';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'card');

// eslint-disable-next-line react/display-name
const Card = forwardRef(({ title, paragraph, image, className = [] }, ref) => (
  <div className={cn(classes.card, className)} ref={ref}>
    {image && <Image className={bc['__background-image']} alt={title} src={`/img/${image}`} fill />}
    <h3 className={bc.__title}>{title}</h3>
    <p className={bc.__paragraph}>{paragraph}</p>
  </div>
));

export default Card;
