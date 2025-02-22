import React from 'react';
import SectionFirstMain from '@app/components/adaptive/FirstScreen';
import PickByDeviceType from 'components/adaptive/hocs/PickByDeviceType';
import PresentersByDevice from 'components/adaptive/hocs/PresentersByDevice';
import PartnersMobile from '@app/components/mobile/Partners';
import PartnersDesktop from '@app/components/desktop/Partners';
import USPMobile from './components/mobile/USP';
import USPDesktop from './components/desktop/USP';
import Video from './components/adaptive/Video';
import styles from './styles.module.scss';
import News from './components/adaptive/News';
import Words from './components/adaptive/Words';
import Lobby from './components/adaptive/Lobby';
import presenters from './presenters.json';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <SectionFirstMain />
      <Video />
      <PickByDeviceType Desktop={USPDesktop} Mobile={USPMobile} />
      <Words />
      <Lobby />
      <PresentersByDevice data={presenters} />
      <PickByDeviceType Desktop={PartnersDesktop} Mobile={PartnersMobile} />
      <News />
    </main>
  );
}
