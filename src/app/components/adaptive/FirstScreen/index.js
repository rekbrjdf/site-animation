'use client';

import React, { useContext, useRef } from 'react';
import classnames from 'classnames';
import { motion, useScroll, useTransform } from 'framer-motion';
import DeviceContext from 'utils/Context/DeviceContext';
import { bindClasses } from 'utils/functions';
import Image from 'next/image';
import classes from './styles.module.scss';
import scrollForMoreIcon from './res/img/scroll-for-more.svg';
import swipeMoreIcon from './res/img/arrow-down.svg';

const bc = bindClasses(classes, 'section-main');

const SectionFirstMain = () => {
  const ref = useRef(null);
  const deviceContext = useContext(DeviceContext);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0vh', '100vh'],
  });

  const opacityScrollAnimation = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const yParallaxText = useTransform(scrollYProgress, [0, 0.5], ['-8%', '25%']);
  const yParallaxTextMobile = useTransform(scrollYProgress, [0, 0.5], ['25%', '50%']);

  const yParallaxShadow = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);

  const isMobile = deviceContext?.deviceType && deviceContext?.deviceType === 'mobile';

  const titleBlurAnimation = useTransform(scrollYProgress, [0.3, 0.8], ['blur(0)', 'blur(12px)']);

  const scrollText = isMobile ? 'Swipe down for more' : 'Scroll for more';

  return (
    <div className={classnames(classes['section-main'])} ref={ref}>
      <motion.h1
        id="title"
        style={{
          filter: titleBlurAnimation,
          bottom: isMobile ? yParallaxTextMobile : yParallaxText,
        }}
        className={bc.__title}
      >
        We craft
        <br />
        Live Games
        <br />
        designed to
        <br />
        captivate
        <br />
        players
      </motion.h1>
      <motion.div
        className={bc['__scroll-button']}
        style={{
          ...(isMobile && { background: 'transparent' }),
          ...(!isMobile && { bottom: yParallaxShadow }),
          opacity: opacityScrollAnimation,
        }}
      >
        <p className={bc['__scroll-text']}>{scrollText}</p>
        <Image
          className={bc['__scroll-icon']}
          src={isMobile ? swipeMoreIcon : scrollForMoreIcon}
          width={isMobile ? 16 : 36}
          height={isMobile ? 16 : 48}
          alt={scrollText}
        />
        {!isMobile && <span className={bc.__line} />}
      </motion.div>
      {/* )} */}
    </div>
  );
};

export default SectionFirstMain;
