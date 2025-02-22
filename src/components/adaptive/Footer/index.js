import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { bindClasses } from 'utils/functions';
import AR from './res/img/AR_footer.png';
import BJ from './res/img/BJ_footer.png';
import CR from './res/img/CR_footer.png';
import Keno from './res/img/Keno_footer.png';
import LER from './res/img/LER_footer.png';
import MW from './res/img/MW_footer.png';
import Logo from './res/img/logo_footer.svg';
import License from './res/img/license_footer.svg';
import Linkedin from './res/img/linkedin.svg';
import Facebook from './res/img/facebook.svg';

import classes from './styles.module.scss';
import RunningWords from './RunningWords';

const bc = bindClasses(classes, 'footer');

export default function Footer() {
  const games = [
    {
      id: 1,
      name: 'ALER',
      img: AR,
    },
    {
      id: 2,
      name: 'Blackjack',
      img: BJ,
    },
    {
      id: 3,
      name: 'CLER',
      img: CR,
    },
    {
      id: 4,
      name: 'LER',
      img: LER,
    },
    {
      id: 5,
      name: 'Wheel',
      img: MW,
    },
    {
      id: 6,
      name: 'Keno',
      img: Keno,
    },
  ];
  return (
    <div className={classes.footer}>
      <RunningWords />
      <div className={bc.__wrapper}>
        <div style={{ '--marquee-elements': games.length }} className={bc.__ticker}>
          {[...games, ...games].map((game) => (
            <div key={game.id} className={bc.__banner}>
              <Link href={`/${game.name}`}>
                <Image src={game.img} alt="game logo" quality={100} loading="lazy" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button type="button" className={bc.__button}>
        Play
      </button>

      <div>
        <div className={bc.__logo}>
          <Image src={Logo} alt="company logo" />
          <p className={bc['__copyright-mobile']}>© 2020–2023. All rights reserved.</p>
        </div>
        <div className={bc['__links-wrapper']}>
          <div className={bc['__links-top']}>
            <div className={bc['__policy-links']}>
              <Link href="/policy">Privacy Policy</Link>
              <span>Cookie Policy</span>
              <span>Terms of Use</span>
            </div>

            <div className={bc['__page-links']}>
              <Link href="/games">Live Games</Link>
              <Link href="/about">About Us</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contacts">Contacts</Link>
            </div>
          </div>
          <div className={bc['__links-bottom']}>
            <p className={bc.__copyright}>© 2020–2023. All rights reserved.</p>

            <div className={bc['__social-links']}>
              <Link href="https://www.linkedin.com/company/atmosferalive">
                <Image src={Linkedin} alt="Linkedin link" />
              </Link>
              <Link href="https://facebook.com/ATMOSFERA.is">
                <Image src={Facebook} alt="Facebook link" />
              </Link>
            </div>
            <div className={bc.__license}>
              <span className={bc.__pegi}>18+</span>
              <Image src={License} alt="license" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
