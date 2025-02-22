import React from 'react';
import { bindClasses } from 'utils/functions';
import Image from 'next/image';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import classes from './styles.module.scss';
import backButton from './res/icon/back-button.svg';
import liveCircle from '../../../res/img/live-circle.svg';

const bc = bindClasses(classes, 'game-poster');

export default function GamePoster({ imageSrc, header, buttonColor }) {
  const router = useRouter();
  return (
    <div className={classes['game-poster']}>
      <Image fill className={bc.__poster} src={imageSrc} alt={header} />
      <div
        onClick={() => router.back()}
        style={{ '--hover-color': buttonColor }}
        className={bc['__back-button']}
      >
        <Image src={backButton} alt="back button" />
      </div>
      <div className={bc.__wrapper}>
        <div className={bc['__tag-live-wrapper']}>
          <Image alt="live" src={liveCircle} />
          <span className={bc['__tag-text']}>Live Broadcast</span>
        </div>
        <span className={bc.__header}>{header}</span>
      </div>
    </div>
  );
}
