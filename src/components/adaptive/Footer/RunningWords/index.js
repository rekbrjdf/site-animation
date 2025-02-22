'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import classes from './styles.module.scss';

export default function RunningWords() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const firstRowTranslateY = useTransform(scrollYProgress, [0, 1], ['-125%', '50%']);
  const secondRowTranslateY = useTransform(scrollYProgress, [0, 1], ['50%', '-125%']);
  return (
    <div ref={ref} className={classes.text}>
      <motion.p style={{ translateX: firstRowTranslateY }}>
        <span>Playful </span>
        game collection
        <span>. </span>
        <span>Trusted </span>
        gaming ally
        <span>. </span>
        <span>Games </span>
        you can count on
        <span>. </span>
      </motion.p>
      <motion.p style={{ translateX: secondRowTranslateY }}>
        <span>Playful </span>
        game collection
        <span>. </span>
        <span>Trusted </span>
        gaming ally
        <span>. </span>
        <span>Games </span>
        you can count on
        <span>. </span>
      </motion.p>
    </div>
  );
}
