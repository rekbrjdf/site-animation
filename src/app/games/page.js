'use client';

import React from 'react';
import FirstScreen from 'components/adaptive/FirstScreen';
import GamesList from './components/adaptive/GamesList';
import Map from './components/adaptive/Map';
import InfoBlock from './components/adaptive/InfoBlock';
import backgroundVideo from './res/video/background.mp4';
import classes from './styles.module.scss';

export default function Games() {
  return (
    <div>
      <FirstScreen
        video={backgroundVideo}
        header="Step into the Live Games world — each game hosted by professionals, live and exclusive."
        subHeader="Leave the hosting to us!"
      />
      <div className={classes.games}>
        <GamesList />
        <InfoBlock />
        <Map />
      </div>
    </div>
  );
}
