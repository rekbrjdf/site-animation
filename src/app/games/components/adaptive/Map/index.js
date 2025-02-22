import React from 'react';
import { bindClasses } from 'utils/functions';
import MapBackgorund from '../res/img/map.svg?component';
import CanadaFlag from '../res/img/flags/canada.svg?component';
import BrazilFlag from '../res/img/flags/brazil.svg?component';
import UKFlag from '../res/img/flags/uk.svg?component';
import ArmeniaFlag from '../res/img/flags/armenia.svg?component';
import AustraliaFlag from '../res/img/flags/australia.svg?component';
import BangladeshFlag from '../res/img/flags/bangladesh.svg?component';
import GermanyFlag from '../res/img/flags/germany.svg?component';
import IndiaFlag from '../res/img/flags/india.svg?component';
import KazakhstanFlag from '../res/img/flags/kazakhstan.svg?component';
import MoroccoFlag from '../res/img/flags/morocco.svg?component';
import PhilippinesFlag from '../res/img/flags/philippines.svg?component';
import PortugalFlag from '../res/img/flags/portugal.svg?component';
import RussiaFlag from '../res/img/flags/russia.svg?component';
import TunisiaFlag from '../res/img/flags/tunisia.svg?component';
import TurkeyFlag from '../res/img/flags/turkey.svg?component';
import UkraineFlag from '../res/img/flags/ukraine.svg?component';
import UzbekistanFlag from '../res/img/flags/uzbekistan.svg?component';

import classes from './styles.module.scss';
import MapPoint from './components/adaptive/MapPoint';

const bc = bindClasses(classes, 'map');

const countries = [
  {
    icon: AustraliaFlag,
    countryName: 'Australia',
    top: 78.1,
    left: 88.6,
  },
  {
    icon: ArmeniaFlag,
    countryName: 'Armenia',
    top: 27.18,
    left: 58.11,
  },
  {
    icon: CanadaFlag,
    countryName: 'Canada',
    top: 22.77,
    left: 23.82,
  },
  {
    icon: BangladeshFlag,
    countryName: 'Bangladesh',
    top: 40.19,
    left: 73.85,
  },
  {
    icon: BrazilFlag,
    countryName: 'Brazil',
    top: 67,
    left: 28.6,
  },
  {
    icon: GermanyFlag,
    countryName: 'Germany',
    top: 20.52,
    left: 47.44,
  },
  {
    icon: IndiaFlag,
    countryName: 'India',
    top: 44.99,
    left: 69.96,
  },
  {
    icon: KazakhstanFlag,
    countryName: 'Kazakhstan',
    top: 28.71,
    left: 70.37,
  },
  {
    icon: PhilippinesFlag,
    countryName: 'Philippines',
    top: 50.33,
    left: 85.49,
  },
  {
    icon: RussiaFlag,
    countryName: 'Russia',
    top: 12.68,
    left: 72.07,
  },
  {
    icon: TunisiaFlag,
    countryName: 'Tunisia',
    top: 36.85,
    left: 48.42,
  },
  {
    icon: UkraineFlag,
    countryName: 'Ukraine',
    top: 21.5,
    left: 53.63,
  },
  {
    icon: UKFlag,
    countryName: 'United Kingdom',
    top: 19,
    left: 43.7,
  },
  {
    icon: UzbekistanFlag,
    countryName: 'Uzbekistan',
    top: 29.58,
    left: 63.84,
  },
  {
    icon: TurkeyFlag,
    countryName: 'Turkey',
    top: 29.91,
    left: 53.81,
  },
  {
    icon: PortugalFlag,
    countryName: 'Portugal',
    top: 28.57,
    left: 41.71,
  },
  {
    icon: MoroccoFlag,
    countryName: 'Morocco',
    top: 35.89,
    left: 42.31,
  },
];

export default function Map() {
  return (
    <div className={classes.map}>
      <div className={bc['__background-container']}>
        <MapBackgorund className={bc['__background-img']} />
        {countries.map((country) => (
          <MapPoint
            key={country.countryName}
            CountryIcon={country.icon}
            countryName={country.countryName}
            top={country.top}
            left={country.left}
          />
        ))}
      </div>
    </div>
  );
}
