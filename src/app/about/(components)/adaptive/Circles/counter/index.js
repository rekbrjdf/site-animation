'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import classes from './styles.module.scss';

export default function Counter({ value = 0 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: 2,
      });
      return animation.stop;
    }
  }, [isInView, count, value]);

  return (
    <motion.span className={classes.counter} ref={ref} style={{ color: 'white' }}>
      {rounded}
    </motion.span>
  );
}
