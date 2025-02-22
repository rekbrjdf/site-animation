import classNames from 'classnames';
import { bindClasses } from 'utils/functions';
import Ellipse from './res/img/country_ellipse.svg?component';

import classes from './styles.module.scss';

const bc = bindClasses(classes, 'map-point');

export default function MapPoint({ countryName, CountryIcon, top, left }) {
  // Ellipse идет раньше чем контейнер с label в разметке, т.к нам через css надо обработать hover на ellipse
  // и сделать видимым идущий после него __label. При этом в css используется flex-direction: column-reverse
  return (
    <div style={{ top: `${top}%`, left: `${left}%` }} className={classNames(classes['map-point'])}>
      <Ellipse className={bc.__ellipse} />
      <div className={bc.__label}>
        <CountryIcon className={bc['__flag-icon']} />
        <p className={bc.__name}>{countryName}</p>
      </div>
    </div>
  );
}
