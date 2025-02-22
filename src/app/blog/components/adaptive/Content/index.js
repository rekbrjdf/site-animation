'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { bindClasses } from 'utils/functions';
import cn from 'classnames';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import FirstScreen from 'components/adaptive/FirstScreen';
import arrow from '../../../res/img/arrow.svg';
import classes from './styles.module.scss';
import Post from '../Post';

const bc = bindClasses(classes, 'blog');
const FILTERS = ['All News', 'Team', 'Interview', 'Company', 'Game', 'Partnership'];
export default function Blog({ posts }) {
  const [filtersOpen, filtersOpenSet] = useState(false);
  const [filter, setFilter] = useState('All News');

  return (
    <div className={classes.blog}>
      <FirstScreen
        // eslint-disable-next-line global-require
        video={require('../../../res/video/background.mp4')}
        header="Stay Tuned for the Latest Updates!"
        subHeader="Explore Our Company News and Insights on Our Blog"
      />
      <div className={bc.__filter}>
        <List>
          <ListItemButton
            sx={{
              borderRadius: '12px',
              backgroundColor: '#121212',
              justifyContent: 'space-between',
            }}
            className={bc.__button}
            onClick={() => filtersOpenSet(!filtersOpen)}
          >
            {filter}
            <Image className={cn({ [bc['__arrow-down']]: filtersOpen })} src={arrow} alt="arrow" />
          </ListItemButton>
          <Collapse in={filtersOpen} unmountOnExit className={bc.__collapse}>
            <List component="div" disablePadding>
              {FILTERS.map((filterItem) => (
                <ListItemButton
                  key={filterItem}
                  className={bc['__item-button']}
                  onClick={() => {
                    setFilter(filterItem);
                    filtersOpenSet(false);
                  }}
                >
                  {filterItem}
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </div>

      {posts
        .filter(
          (filterItem) =>
            filter === 'All News' || filterItem.news_category.title === filter.toUpperCase(),
        )
        .map((post) => (
          <Post key={post.id} post={post} />
        ))}
    </div>
  );
}
