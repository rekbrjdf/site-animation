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
import Win from './res/img/logo-1win.svg';
import XBet from './res/img/logo-1xbet.svg';
import Island from './res/img/logo-7island.svg';
import ArkinGroup from './res/img/logo-arkingroup.svg';
import BetB2b from './res/img/logo-betb2b.svg';
import BetBoom from './res/img/logo-betboom.svg';
import BetConstruct from './res/img/logo-betconstruct.svg';
import Digitain from './res/img/logo-digitain.svg';
import Infingame from './res/img/logo-infingame.svg';
import LuckylandGaming from './res/img/logo-luckylandgaming.svg';
import Parimatch from './res/img/logo-parimatch.svg';
import SoftGaming from './res/img/logo-softgamings.svg';
import SyprussportingClub from './res/img/logo-syprussportingclub.svg';
import Technamin from './res/img/logo-technamin.svg';
import TopplayGaming from './res/img/logo-topplaygaming.svg';

import 'swiper/css';

const bc = bindClasses(classes, 'partners');

function Partners() {
  const swiperConfig = {
    noSwiping: true,
    noSwipingClass: 'swiper-slide',
    slidesPerView: 'auto',
    direction: 'vertical',
    centeredSlides: true,
    speed: 3000,
    spaceBetween: 16,
    freeMode: true,
    autoplay: {
      delay: 0.5,
    },
    loop: true,
    modules: [Autoplay],
    className: bc.__slider,
  };
  return (
    <div className={cn(classes.partners)}>
      <div className={bc.__wrapper}>
        <div className={bc.__left}>
          <h3 className={bc.__title}>
            Chosen by <br /> industry disruptors
          </h3>
        </div>
        <div className={bc.__right}>
          <div className={bc.__column}>
            <Swiper {...swiperConfig}>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={Pronet} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={Softwiss} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={Bogap} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={Win} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={XBet} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={bc.__column}>
            <Swiper {...swiperConfig}>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={Island} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={ArkinGroup} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={BetB2b} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={BetBoom} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={BetConstruct} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={bc.__column}>
            <Swiper {...swiperConfig}>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={Digitain} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={Infingame} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={LuckylandGaming} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={Parimatch} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={SoftGaming} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={bc.__column}>
            <Swiper {...swiperConfig}>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={SyprussportingClub} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={Technamin} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={bc.__company}>
                  <Image src={TopplayGaming} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
