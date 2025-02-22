import classNames from 'classnames';
import classes from './styles.module.scss';

const BlackButton = ({ children, onClick, type, isDisabled }) =>
  type === 'submit' ? (
    <button
      disabled={isDisabled}
      type="submit"
      className={classNames(classes.button, {
        [classes.button_active]: !isDisabled,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <button
      disabled={isDisabled}
      type="button"
      className={classNames(classes.button, {
        [classes.button_active]: !isDisabled,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );

export default BlackButton;
