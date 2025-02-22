/* eslint-disable react/no-danger */

'use client';

import React, { useState } from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import { bindClasses } from 'utils/functions';
import Link from 'next/link';
import LinkIcon from 'public/icons/link.svg';
import Linkedin from 'public/icons/linkedin.svg';
import OkIcon from 'public/icons/ok.svg';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'news-content');

const BlogContent = ({ content, linkedin }) => {
  const [isAnimationButton, setAnimationButton] = useState(false);

  function createMarkup(text) {
    return { __html: text };
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    if (!isAnimationButton) {
      setAnimationButton(true);
      setTimeout(() => {
        setAnimationButton(false);
      }, 1200);
    }
  };

  return (
    <div className={classnames(classes['news-content'])}>
      <div className={bc.__wrapper}>
        <div className={bc.__content}>
          <div dangerouslySetInnerHTML={createMarkup(content)} />
        </div>
        <div className={bc.__links}>
          <Link className={bc.__link} target="_blank" href={linkedin}>
            <Image src={Linkedin} alt="icon" width={32} height={32} />
          </Link>
          <button
            className={classnames(bc.__link, {
              [bc.__link_animation]: isAnimationButton,
            })}
            type="button"
            onClick={copyToClipboard}
          >
            <Image src={LinkIcon} className={bc['__icon-link']} alt="icon" width={32} height={32} />
            <Image src={OkIcon} className={bc['__icon-ok']} alt="icon" width={32} height={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
