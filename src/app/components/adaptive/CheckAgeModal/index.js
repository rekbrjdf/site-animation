import React from 'react';
import { bindClasses } from 'utils/functions';
import classes from './style.module.scss';

const bc = bindClasses(classes, 'modal');

export default function CheckAgeModal({ isActive, onClick }) {
  return (
    <>
      {isActive && (
        <div className={classes.modal}>
          <div className={bc['__modal-content']}>
            <h2 className={bc.__title}>Adults 18+ Only</h2>
            <div className={bc.__text}>
              <span>Hey there! </span>
              <div style={{ display: 'inline' }}>
                <span>This site is for grown-ups only. </span>
                <p>By entering, you&apos;re saying you&apos;re 18 or older.</p>
              </div>
              <p className={bc.__text_white}>Click &apos;I&apos;m 18+&apos; to come on in!</p>
            </div>
            <button type="button" onClick={onClick} className={bc.__button}>
              I’m 18+
            </button>
          </div>
        </div>
      )}
    </>
  );
}
