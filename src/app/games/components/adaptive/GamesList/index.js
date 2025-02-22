'use client';

import { bindClasses } from 'utils/functions';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import classes from './styles.module.scss';
import liveCircle from '../../../../../res/img/live-circle.svg';
import ListViewIcon from '../res/img/list-view.svg?component';
import TableViewIcon from '../res/img/table-view.svg?component';
import GAMES from '../../../../../config';

const bc = bindClasses(classes, 'games-list');

export default function GameList() {
  const [isTableView, setIsTableView] = useState(false);

  const onTableViewSet = () => {
    setIsTableView(true);
  };

  const onListViewSet = () => {
    setIsTableView(false);
  };

  return (
    <div className={classes['games-list']}>
      <div className={bc['__settings-container']}>
        <span className={bc['__settings-text']}>Game Selection</span>
        <div className={bc['__settings-buttons']}>
          <ListViewIcon
            onClick={onListViewSet}
            className={classNames(bc.__button, {
              [bc['_white-svg']]: !isTableView,
            })}
          />
          <div>
            <TableViewIcon
              onClick={onTableViewSet}
              className={classNames(bc.__button, {
                [bc['_white-svg']]: isTableView,
              })}
            />
          </div>
        </div>
      </div>
      <div
        className={classNames(bc['__cards-container'], {
          [bc['__cards_table-view']]: isTableView,
        })}
      >
        {GAMES.map((game) => (
          <div key={game.name} className={bc['__card-wrapper']}>
            <Link href={game.link} className={bc.__link}>
              <Image
                quality={100}
                alt={game.name}
                className={bc['__card-background']}
                src={game.highResImg}
              />
              <div className={bc['__card-tags-wrapper']}>
                <div className={bc['__tag-wrapper']}>
                  {game.tags.map((tag) => (
                    <span key={tag} className={bc['__tag-text']}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={bc['__tag-live-wrapper']}>
                  <Image alt="live" src={liveCircle} />
                  <span className={classNames(bc['__tag-text'], bc['__tag-live-text'])}>
                    Live Broadcast
                  </span>
                </div>
              </div>
              <span className={bc['__card-name']}>{game.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
