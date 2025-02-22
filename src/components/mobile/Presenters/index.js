'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomPagination from 'components/mobile/Pagination';
import { bindClasses } from 'utils/functions';
import Card from 'components/mobile/Card';
import classes from './styles.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';

const bc = bindClasses(classes, 'presenters');

function Presenters({ data }) {
  const ref = useRef(null);
  const swiperRef = useRef(null);
  const isInView = useInView(ref);
  const [activeIndex, setActiveSlide] = useState(0);
  const AUTOPLAY_SEC = 6000;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [timeLeftPercentage, setTimeLeftPercentage] = useState(1);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    if (isInView) swiper.autoplay.resume();
    else swiper.autoplay.pause();
  }, [isInView]);

  return (
    <>
      <div
        ref={ref}
        className={classes.presenters}
        style={{
          '--slide-time': `${AUTOPLAY_SEC}ms`,
          '--animation-play-state': isInView ? 'running' : 'paused',
        }}
      >
        <Swiper
          className={bc.__swiper}
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: AUTOPLAY_SEC,
          }}
          onAutoplayTimeLeft={(swiper, timeLeft, percentage) => {
            setTimeLeftPercentage(percentage);
            setCurrentSlideIndex(swiper.activeIndex);
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        >
          {data[0].map((card, i) => (
            <SwiperSlide style={{ height: 'auto' }} key={card.title}>
              <Card
                title={card.title}
                image={card.img}
                paragraph={data[1][i].description}
                index={i}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <CustomPagination
          currentSlideIndex={currentSlideIndex}
          timeLeftPercentage={timeLeftPercentage}
          total={data[0].length}
          current={activeIndex}
        />
      </div>
    </>
  );
}

export default Presenters;
