'use client';

import { bindClasses } from 'utils/functions';
import classNames from 'classnames';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'message');

const SubmitFormMessage = ({ type, title, message }) => (
  <div className={classes.message}>
    <p
      className={classNames(bc.__title, {
        [bc.__title_success]: type === 'success',
        [bc.__title_error]: type === 'error',
      })}
    >
      {title}
    </p>
    <p className={bc.__text}>{message}</p>
  </div>
);

export default SubmitFormMessage;
