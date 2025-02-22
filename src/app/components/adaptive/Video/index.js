'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { bindClasses } from 'utils/functions';
import Image from 'next/image';
import classes from './styles.module.scss';
import volumeOn from './res/icons/volumeOn.svg';
import volumeOff from './res/icons/volumeOff.svg';

const bc = bindClasses(classes, 'section-video');

const Video = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const isInViewVideo = useInView(videoRef, { margin: '-2px 0px' });

  useEffect(() => {
    if (!isInViewVideo) {
      setIsMuted(true);
    }
  }, [isInViewVideo]);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: textYProgress } = useScroll({
    target: textRef,
    offset: ['start start', 'end end'],
  });

  const clipPath = useTransform(scrollYProgress, [0, 1], ['inset(35% 15%)', 'inset(0%)']);
  const opacity = useTransform(textYProgress, [0, 0.5, 1], [0, 0, 1]);

  return (
    <div className={classes['section-video']}>
      <div ref={videoRef} className={bc['__video-container']}>
        <div className={bc['__sticky-wrapper']}>
          <motion.video
            style={{ clipPath }}
            className={bc.__video}
            controls={false}
            autoPlay
            loop
            muted={isMuted}
            playsInline
          >
            <source src="/showreel.mp4" type="video/mp4" />
          </motion.video>
          <button onClick={() => setIsMuted(!isMuted)} type="button" className={bc.__volume}>
            <Image src={isMuted ? volumeOff : volumeOn} alt="volumeOn" />
          </button>
        </div>
      </div>

      <div className={bc['__text-container']} ref={textRef}>
        <motion.div style={{ opacity }} className={bc.__text}>
          <p className={bc.__content}>
            We strive to create <span>live casino games</span> <br /> that make a lasting impact,
            engage the senses,
            <br /> and guarantee a <span>transparent gaming</span> experience
            <br /> players can rely on.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Video;
