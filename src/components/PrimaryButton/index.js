import React from 'react';
import classnames from 'classnames';
import classes from './styles.module.scss';

const PrimaryButton = ({ onClick, text }) => (
  <div onClick={onClick} className={classnames(classes.button)}>
    {text}
  </div>
);

export default PrimaryButton;
