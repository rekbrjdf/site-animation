'use client';

import React, { useRef, useState, useEffect } from 'react';
import cn from 'classnames';
import { bindClasses } from 'utils/functions';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useMeasure } from 'react-use';
import Card from 'components/desktop/Card';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'presenters');

const CARD_HEIGHT_PX = 544;
function Presenters({ data = [[]] }) {
  const containerRef = useRef();
  const [setMeasureRef, containerBounds] = useMeasure(containerRef.current);
  useEffect(() => {
    setMeasureRef(containerRef.current);
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const [currentCard, setCurrentCard] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setCurrentCard(
      Math.min(
        Math.trunc((progress * (containerBounds.height + containerBounds.top)) / CARD_HEIGHT_PX),
        data[0].length - 1,
      ),
    );
  });

  return (
    <>
      <div
        ref={containerRef}
        className={classes.presenters}
        style={{
          '--card-length': data[0].length,
          '--card-height': '520px',
        }}
      >
        <div className={cn(bc.__left)}>
          <Card
            key={currentCard}
            title={data[0][currentCard].title}
            image={data[0][currentCard].img}
          />
        </div>
        <div className={cn(bc.__right)}>
          {data[1].map((card, i) => (
            <Card key={card.description} paragraph={card.description} icon={card.icon} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Presenters;
