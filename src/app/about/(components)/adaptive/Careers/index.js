import React from 'react';
import { getApiHost } from 'utils/functions';
import Accordion from './Accordion';
import styles from './styles.module.scss';

export default async function Careers() {
  const response = await fetch(`${getApiHost()}/vacancies`);
  const data = await response.json();
  const list = data[0]?.list;
  return (
    <div>
      {list && (
        <>
          <h2 className={styles.title}>Available Positions</h2>
          <Accordion list={list} />
        </>
      )}
    </div>
  );
}
