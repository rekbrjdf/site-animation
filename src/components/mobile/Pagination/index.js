'use client';

import React from 'react';
import { bindClasses } from 'utils/functions';
import cn from 'classnames';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'pagination');

export function Bullet({ fillPercentage }) {
  return (
    <div className={cn(bc.__bullet)}>
      <div
        className={cn(bc['__bullet-value'])}
        style={{ transform: `scaleX(${fillPercentage})` }}
      />
    </div>
  );
}

// eslint-disable-next-line react/display-name
const Pagination = ({ total, currentSlideIndex, timeLeftPercentage }) => {
  const bulletsArray = Array.from(Array(total).keys());
  return (
    <div className={cn(classes.pagination)}>
      {bulletsArray.map((index) => {
        let bulletFillPercentage;
        if (index < currentSlideIndex) {
          bulletFillPercentage = 1;
        } else if (index === currentSlideIndex) {
          bulletFillPercentage = 1 - timeLeftPercentage;
        } else {
          bulletFillPercentage = 0;
        }
        // eslint-disable-next-line react/jsx-key
        return <Bullet fillPercentage={bulletFillPercentage} />;
      })}
    </div>
  );
};

export default Pagination;
