'use client';

import React, { useRef, useContext } from 'react';
import { bindClasses } from 'utils/functions';
import classNames from 'classnames';
import { motion, useScroll, useTransform, easeIn } from 'framer-motion';
import DeviceContext from 'utils/Context/DeviceContext';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'words');

export default function Words() {
  const deviceContext = useContext(DeviceContext);
  const isMobile = deviceContext?.deviceType && deviceContext?.deviceType === 'mobile';

  const mainContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: mainContainerRef,
    offset: ['start end', 'end start'],
  });

  const firstRowTranslateY = useTransform(scrollYProgress, [0, 0.2], ['-100%', '0%']);

  const innovativeTranslateXDesk = useTransform(scrollYProgress, [0], ['156%']);
  const innovativeTranslateYDesk = useTransform(scrollYProgress, [0, 0.2], ['-155%', '-101%']);
  const engagingTranslateXDesk = useTransform(scrollYProgress, [0.2, 0.7], ['20%', '85%'], easeIn);
  const engagingTranslateYDesk = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7],
    ['-100%', '0%', '-100%'],
  );
  const dinamicTranslateXDesk = useTransform(scrollYProgress, [0.2, 0.7], ['-15%', '-10%']);
  const dinamicTranslateYDesk = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7],
    ['0%', '100%', '-100%'],
  );
  const reliableTranslateXDesk = useTransform(scrollYProgress, [0.2, 0.7], ['-180%', '-110%']);
  const reliableTranslateYDesk = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7],
    ['100%', '200%', '-100%'],
  );

  const innovativeTranslateXMob = useTransform(scrollYProgress, [0], ['76%']);
  const innovativeTranslateYMob = useTransform(scrollYProgress, [0, 0.2], ['-155%', '-101%']);
  const engagingTranslateXMob = useTransform(scrollYProgress, [0.2, 0.7], ['-50%', '0%'], easeIn);
  const engagingTranslateYMob = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7],
    ['-100%', '0%', '-100%'],
  );
  const dinamicTranslateXMob = useTransform(scrollYProgress, [0.2, 0.7], ['100%', '80%']);
  const dinamicTranslateYMob = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7],
    ['-150%', '0%', '-200%'],
  );
  const reliableTranslateXMob = useTransform(scrollYProgress, [0.2, 0.7], ['-50%', '50%']);
  const reliableTranslateYMob = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7],
    ['-100%', '100%', '-200%'],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
    [0, 10, -10, 10, -10, 0],
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.67], [0, 1, 1, 0]);
  const playersFocusedOpcavity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const atmosferaIsOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div ref={mainContainerRef} className={classes.main}>
      <motion.div
        key={isMobile}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={classes.words}
      >
        <motion.div className={bc['__first-row']}>
          <motion.div
            style={{
              opacity: atmosferaIsOpacity,
              translateY: firstRowTranslateY,
            }}
          >
            atmosfera is
          </motion.div>
          <motion.div
            style={{
              opacity: playersFocusedOpcavity,
            }}
            transition={{ duration: 1 }}
            className={classNames(bc.__word, bc['__word-blue'])}
          >
            Players-focused
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            opacity,
            translateX: isMobile ? innovativeTranslateXMob : innovativeTranslateXDesk,
            translateY: isMobile ? innovativeTranslateYMob : innovativeTranslateYDesk,
          }}
          initial={{ display: 'inline-block' }}
          className={classNames(bc.__word, bc['__word-violet'])}
        >
          innovative
        </motion.div>
        <motion.div
          style={{
            translateX: isMobile ? engagingTranslateXMob : engagingTranslateXDesk,
            translateY: isMobile ? engagingTranslateYMob : engagingTranslateYDesk,
            opacity,
            rotate,
          }}
          className={classNames(bc.__word, bc['__word-blue'])}
        >
          Engaging
        </motion.div>
        <motion.div
          style={{
            translateX: isMobile ? dinamicTranslateXMob : dinamicTranslateXDesk,
            translateY: isMobile ? dinamicTranslateYMob : dinamicTranslateYDesk,
            opacity,
            rotate,
          }}
          className={classNames(bc.__word, bc['__word-black'])}
        >
          Dinamic
        </motion.div>
        <motion.div
          style={{
            translateX: isMobile ? reliableTranslateXMob : reliableTranslateXDesk,
            translateY: isMobile ? reliableTranslateYMob : reliableTranslateYDesk,
            opacity,
            rotate,
          }}
          className={classNames(bc.__word, bc['__word-white'])}
        >
          Reliable
        </motion.div>
      </motion.div>
    </div>
  );
}
