'use client';

import React from 'react';
import { bindClasses } from 'utils/functions';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import classes from './styles.module.scss';

import Bogap from './res/img/logo-bogap.svg';
import Pronet from './res/img/logo-pronet.svg';
import Softwiss from './res/img/logo-softwiss.svg';

import 'swiper/css';

const bc = bindClasses(classes, 'partners');

function Partners() {
  const swiperConfig = {
    grabCursor: true,
    noSwiping: true,
    noSwipingClass: 'swiper-slide',
    slidesPerView: 'auto',
    centeredSlides: true,
    speed: 3000,
    spaceBetween: 8,
    a11y: false,
    freeMode: true,
    autoplay: {
      delay: 0,
    },
    loop: true,
    modules: [Autoplay],
    className: bc.__slider,
  };
  return (
    <div className={cn(classes.partners)}>
      <div className={bc.__wrapper}>
        <h3 className={bc.__title}>
          Chosen by <br /> industry disruptors
        </h3>
        <div className={bc.__row}>
          <Swiper {...swiperConfig}>
            <SwiperSlide className={bc['__swiper-slide']}>
              <div className={bc.__company}>
                <Image src={Pronet} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={bc['__swiper-slide']}>
              <div className={bc.__company}>
                <Image src={Softwiss} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={bc['__swiper-slide']}>
              <div className={bc.__company}>
                <Image src={Bogap} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={bc['__swiper-slide']}>
              <div className={bc.__company}>
                <Image src={Softwiss} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={bc['__swiper-slide']}>
              <div className={bc.__company}>
                <Image src={Bogap} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={bc.__row}>
          <Swiper {...swiperConfig}>
            <SwiperSlide className={bc['__swiper-slide']}>
              <div className={bc.__company}>
                <Image src={Pronet} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={bc['__swiper-slide']}>
              <div className={bc.__company}>
                <Image src={Softwiss} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={bc['__swiper-slide']}>
              <div className={bc.__company}>
                <Image src={Bogap} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={bc['__swiper-slide']}>
              <div className={bc.__company}>
                <Image src={Softwiss} />
              </div>
            </SwiperSlide>
            <SwiperSlide className={bc['__swiper-slide']}>
              <div className={bc.__company}>
                <Image src={Bogap} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Partners;
