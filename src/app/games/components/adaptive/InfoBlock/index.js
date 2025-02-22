import { bindClasses } from 'utils/functions';
import classNames from 'classnames';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'info-block');

export default function InfoBlock() {
  return (
    <div className={classes['info-block']}>
      <div className={bc['__top-part']}>
        <span>Discover our Live Games </span>
        <p className={bc.__text_white}>loved worldwide.</p>
      </div>
      <div className={classNames(bc['__desktop-visible'])}>
        <div className={bc['__flex-wrapper']}>
          <p>
            Our gaming experiences transcend borders,
            <span className={bc.__text_white}> reaching</span>
          </p>
        </div>
        <p className={bc['__flex-wrapper']}>
          <span className={bc.__text_white}>players globally. </span>
          Explore the map to see where
        </p>
        <span className={bc['__flex-wrapper']}>our games are making waves.</span>
      </div>
      <div className={bc['__bottom-part']}>
        <p>Our gaming experiences</p>
        <p>
          transcend borders, <span className={bc.__text_white}>reaching</span>
        </p>
        <p>
          <span className={bc.__text_white}>players globally. </span> Explore the{' '}
        </p>
        <p>map to see where our games </p>
        <p>are making waves.</p>
      </div>
    </div>
  );
}
