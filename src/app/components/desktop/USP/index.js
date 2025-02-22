'use client';

import React from 'react';
import { bindClasses } from 'utils/functions';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'section-slider');

const Slider = () => {
  const ITEM_COUNT = 3;

  return (
    <section
      style={{ '--item-count': ITEM_COUNT, '--item-width': `30vw` }}
      className={classes['section-slider']}
    >
      <div className={bc['__sticky-wrapper']}>
        <div className={bc['__scroll-ctn']}>
          <>
            <div className={bc.__item}>
              <div className={bc.__icon} />
              <div className={bc.__title}>Reliable Partnership</div>
              <div className={bc.__content}>
                Gain transparent <span>profit insights</span> through our proprietary admin system.
                Enjoy speedy integrations facilitated by our dedicated business development team.
                Access around-the-clock <span>technical support</span>.
              </div>
            </div>
            <div className={bc.__item}>
              <div className={bc.__icon} />
              <div className={bc.__title}>Cutting-edge Games</div>
              <div className={bc.__content}>
                <span>Professional Game Presenter</span> Academy for top-tier performance.
                Continuous monitoring and control for <span>game</span>
                <span>quality. Modern studio</span> design and interfaces for players engagement.
              </div>
            </div>
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
          </>
        </div>
      </div>
    </section>
  );
};

export default Slider;
