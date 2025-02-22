'use client';

import React, { useEffect, useRef, useState } from 'react';
import { bindClasses } from 'utils/functions';
import { useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CustomPagination from 'components/mobile/Pagination';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'slider');

function Slider() {
  const ITEM_COUNT = 3;
  const ref = useRef(null);
  const swiperRef = useRef(null);
  const isInView = useInView(ref);
  const [activeIndex, setActiveSlide] = useState(0);
  const AUTOPLAY_SEC = 6000;

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    if (isInView) swiper.autoplay.resume();
    else swiper.autoplay.pause();
  }, [isInView]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [timeLeftPercentage, setTimeLeftPercentage] = useState(1);

  return (
    <>
      <div
        ref={ref}
        className={classes.slider}
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
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          onAutoplayTimeLeft={(swiper, timeLeft, percentage) => {
            setTimeLeftPercentage(percentage);
            setCurrentSlideIndex(swiper.activeIndex);
          }}
        >
          <SwiperSlide>
            <div className={bc.__item}>
              <div className={bc.__icon} />
              <div className={bc.__title}>Reliable Partnership</div>
              <div className={bc.__content}>
                Gain transparent <span>profit insights</span> through our proprietary admin system.
                Enjoy speedy integrations facilitated by our dedicated business development team.
                Access around-the-clock <span>technical support</span>.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={bc.__item}>
              <div className={bc.__icon} />
              <div className={bc.__title}>Cutting-edge Games</div>
              <div className={bc.__content}>
                <span>Professional Game Presenter</span> Academy for top-tier performance.
                Continuous monitoring and control for <span>game</span>
                <span>quality. Modern studio</span> design and interfaces for players engagement.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={bc.__item}>
              <div className={bc.__icon} />
              <div className={bc.__title}>Data Integrity</div>
              <div className={bc.__content}>
                Anti-fraud system to maintain player
                <span>behavioral legitimacy.</span> Developer- friendly API documentation for
                <span> seamless integration</span>. Exciting<span> game tournaments</span> and
                promos.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <CustomPagination
          currentSlideIndex={currentSlideIndex}
          timeLeftPercentage={timeLeftPercentage}
          total={ITEM_COUNT}
          current={activeIndex}
        />
      </div>
    </>
  );
}

export default Slider;
