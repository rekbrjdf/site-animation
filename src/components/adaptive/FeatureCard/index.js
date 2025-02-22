import React from 'react';
import { bindClasses } from 'utils/functions';
import Image from 'next/image';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'feature-card');

function FeatureCard({ icon, title }) {
  return (
    <div className={classes['feature-card']}>
      <Image className={bc.__icon} src={icon} alt="picture of the feature" />
      <div className={bc.__label}>{title}</div>
    </div>
  );
}

export default FeatureCard;
