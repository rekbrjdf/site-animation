import React from 'react';
import { bindClasses } from 'utils/functions';
import Image from 'next/image';
import cn from 'classnames';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'first-page');

export default function FirstScreen({ imageSrc, video, header, subHeader }) {
  return (
    <div className={classes['first-page']}>
      {video && <video muted autoPlay loop src={video} width="100%" height="100%" />}
      {imageSrc && <Image className={bc.__poster} src={imageSrc} alt={header} />}
      <div className={bc.__wrapper}>
        <span className={cn(bc.__header, bc.__header_sub)}>{header}</span>
        <span className={bc.__header}>{subHeader}</span>
      </div>
    </div>
  );
}
