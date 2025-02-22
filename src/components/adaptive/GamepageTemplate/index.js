'use client';

import React, { useState, useContext } from 'react';
import { bindClasses } from '@utils/functions';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import videoPlaceholder from 'public/video/contacts.mp4';
import DeviceContext from 'utils/Context/DeviceContext';
import LenisScrollReset from '@app/components/adaptive/LenisScrollReset';
import PresentersByDevice from 'components/adaptive/hocs/PresentersByDevice';
import classes from './styles.module.scss';
import GamePoster from '../GamePoster';
import PlaySVG from './res/icon/play.svg?component';
import FeatureCard from '../FeatureCard';

const bc = bindClasses(classes, 'game');

export default function GamePageTemplate({
  name,
  buttonColor,
  accentColor,
  title,
  bluredPoster,
  slogans,
  features,
  specs,
}) {
  const [open, setIsOpen] = useState(false);
  const deviceContext = useContext(DeviceContext);
  const isMobile = deviceContext?.deviceType && deviceContext?.deviceType === 'mobile';
  const keyForText = isMobile ? 'mobile' : 'desktop';
  const posterName = isMobile ? '-mob.jpg' : '-poster.jpg';

  return (
    <div>
      <LenisScrollReset />
      <GamePoster
        imageSrc={`/img/games/${name}/${name}${posterName}`}
        buttonColor={buttonColor}
        header={title}
      />
      <div className={bc['__text-container']}>
        <span className={bc.__title}>{slogans[keyForText].sloganTitle}</span>
        <p className={bc.__content}>{slogans[keyForText].slogan}</p>
      </div>

      <div
        className={bc['__video-link']}
        style={{
          '--first-accent-color': accentColor[0],
          '--second-accent-color': accentColor[1],
        }}
      >
        <div className={bc['__video-content']}>
          <Image fill src={bluredPoster} alt="Blured poster" />
          <button onClick={() => setIsOpen(true)} type="button" className={bc.__watch}>
            <PlaySVG />
            <span>Watch Gameplay</span>
          </button>
        </div>
      </div>

      <div className={bc.__features}>
        <h2 className={bc['__features-title']}>Key Features</h2>

        <div className={bc['__features-list']}>
          {features.map(({ title: fTitle, icon }) => (
            <FeatureCard key={fTitle} title={fTitle} icon={icon} />
          ))}
        </div>
      </div>

      <div className={bc['__text-container']}>
        <span className={bc.__title}>Game Overview</span>
        <p className={bc.__content}>{slogans[keyForText].overview}</p>
      </div>

      <div className={bc.__space} />
      <PresentersByDevice data={specs} />
      {/* <div className={bc.__space} /> */}

      <div className={bc['__text-container']}>
        <p className={bc.__content}>{slogans[keyForText].demoSlogan}</p>
        <button type="button" className={bc.__demo}>
          Access Demo
        </button>
      </div>

      <Modal open={open} onClose={() => setIsOpen(false)} className={bc['__video-modal']}>
        <div className={bc['__video-modal-content']}>
          <button onClick={() => setIsOpen(false)} className={bc['__close-button']} type="button" />
          <video muted autoPlay loop src={videoPlaceholder} width="100%" height="100%" />
        </div>
      </Modal>
    </div>
  );
}
