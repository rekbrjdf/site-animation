'use client';

import React, { useRef } from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { bindClasses } from 'utils/functions';
import Link from 'next/link';
import iconLogo from '../../res/img/logo.svg';
import classes from './styles.module.scss';
import PrimaryButton from '../PrimaryButton/index';

const bc = bindClasses(classes, 'header');

const HEADER_HEIGHT = 100;

const Header = () => {
  const headerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['0px', `${HEADER_HEIGHT}px`],
  });

  const opacityAnimation = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={headerRef}
      className={classnames(classes.header)}
      style={{ opacity: opacityAnimation }}
    >
      <div id="header" className={classnames(bc.__wrapper)}>
        <div className={bc.__logo}>
          <Image src={iconLogo} alt="logo" />
        </div>
        <div className={bc.__menu}>
          <div className={bc.__item}>
            <Link href="#">Live Games</Link>
          </div>
          <div className={bc.__item}>About Us</div>
          <div className={bc.__item}>Blog</div>
          <div className={bc.__item}>Contacts</div>
        </div>
        <div className={bc.__button}>
          <PrimaryButton text="Play" />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
