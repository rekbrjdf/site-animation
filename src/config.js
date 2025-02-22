import ALERImage from './app/components/adaptive/Lobby/res/img/AR.jpg';
import ALERImageMob from './app/components/adaptive/Lobby/res/img/AR_mob.jpg';
import LERImage from './app/components/adaptive/Lobby/res/img/Live-Roulette.jpg';
import LERImageMob from './app/components/adaptive/Lobby/res/img/LER_mob.jpg';
import BjImage from './app/components/adaptive/Lobby/res/img/BJ.jpg';
import BjImageMob from './app/components/adaptive/Lobby/res/img/BJ_mob.jpg';
import CLERImage from './app/components/adaptive/Lobby/res/img/Cocktail-Roulette.jpg';
import CLERImageMob from './app/components/adaptive/Lobby/res/img/CR_mob.jpg';
import KenoImage from './app/components/adaptive/Lobby/res/img/Keno.jpg';
import KenoImageMob from './app/components/adaptive/Lobby/res/img/Keno_mob.jpg';
import BaccaratImage from './app/components/adaptive/Lobby/res/img/Baccarat.png';
import BaccaratImageMob from './app/components/adaptive/Lobby/res/img/Baccarat_mob.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    name: 'Speed Baccarat',
    highResImg: BaccaratImage,
    lowResImg: BaccaratImageMob,
    tags: ['show', 'funny hosts', 'music'],
    link: 'games/baccarat',
  },
  {
    name: 'Auto Roulette',
    highResImg: ALERImage,
    lowResImg: ALERImageMob,
    tags: ['automated', 'fast-paced', 'slot-studio'],
    link: 'games/aler',
  },
  {
    name: 'Live Roulette',
    highResImg: LERImage,
    lowResImg: LERImageMob,
    tags: ['classic', 'luxury', 'immersive'],
    link: 'games/ler',
  },
  {
    name: 'Blackjack',
    highResImg: BjImage,
    lowResImg: BjImageMob,
    tags: ['cards', 'multi-seats', 'VIP hosts'],
    link: 'games/bj',
  },
  {
    name: 'Cocktail Roulette',
    highResImg: CLERImage,
    lowResImg: CLERImageMob,
    tags: ['show', 'bar', 'chat'],
    link: 'games/cler',
  },
  {
    name: 'Keno',
    highResImg: KenoImage,
    lowResImg: KenoImageMob,
    tags: ['numbers', 'quick wins', 'lottery'],
    link: 'games/keno',
  },
];
