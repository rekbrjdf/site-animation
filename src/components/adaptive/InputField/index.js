'use client';

import { useEffect, useState } from 'react';
import { useField } from 'formik';
import classNames from 'classnames';
import classes from './styles.module.scss';

const InputField = ({ placeholder, page, ...props }) => {
  const [isValid, setValid] = useState(false);
  const [field, meta] = useField(props);

  const focusHandler = () => {
    setValid(true);
  };

  const blurHandler = (e) => {
    field.onBlur(e);
    setValid(!meta.error && e.target.value);
  };

  useEffect(() => {
    if (!meta.touched || (!meta.error && meta.value)) setValid(true);
  }, [meta.touched, meta.value, meta.error]);

  return (
    <div>
      <input
        name={props.name}
        className={classNames(classes.input, {
          [classes.input_error]: !isValid,
        })}
        onFocus={focusHandler}
        placeholder={placeholder}
        {...field}
        {...props}
        onBlur={blurHandler}
      />
      <div className={classes.error}>
        <span
          className={classNames(classes.error__text, {
            [classes.error_show]: !isValid,
          })}
        >
          {meta.error}
        </span>
      </div>
    </div>
  );
};

export default InputField;
