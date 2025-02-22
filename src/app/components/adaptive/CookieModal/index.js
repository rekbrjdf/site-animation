import React from 'react';
import { bindClasses } from 'utils/functions';
import Image from 'next/image';
import cn from 'classnames';
import Link from 'next/link';
import closeIcon from '../../../../../public/icons/close-icon.svg';
import classes from './style.module.scss';

const bc = bindClasses(classes, 'modal');

export default function CookieModal({ isOpened, onClick }) {
  return (
    <>
      {isOpened && (
        <div className={classes.modal}>
          <div className={bc.__header}>
            <h2 className={bc.__title}>Cookie Consent</h2>
            <button className={bc.__button} type="button" onClick={onClick}>
              <Image src={closeIcon} />
            </button>
          </div>
          <div className={bc['__modal-content']}>
            <p>Enjoy a better experience. Agree to our cookie use by using our site.</p>
          </div>
          <div className={bc['__modal-control']}>
            <button
              type="button"
              className={cn(bc.__button, bc['__white-button'])}
              onClick={onClick}
            >
              Got it!
            </button>
            <Link href="/cookiePolicy" className={bc['__read-more']} style={{ color: '#676767' }}>
              Read More
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
