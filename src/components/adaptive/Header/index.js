'use client';

import React, { useRef, useState, useContext, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Arrow from 'public/icons/arrow-body.svg';
import merge from 'lodash/merge';
import Link from 'next/link';
import DeviceContext from 'utils/Context/DeviceContext';
import { bindClasses } from 'utils/functions';
import { usePathname } from 'next/navigation';
import classes from './styles.module.scss';
import iconLogo from '../../../res/img/logo.svg';
import PrimaryButton from '../../PrimaryButton/index';

const bc = bindClasses(classes, 'header');

const Header = () => {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  // false - down, true - up
  const [scrollDirection, setScrollDirection] = useState(false);
  const device = useContext(DeviceContext);
  const isMobile = device?.deviceType === 'mobile';
  const variantsKey = !isMobile ? 'desktop' : 'default';
  const { scrollY } = useScroll();
  const [openedChildNav, setOpenedChildNav] = useState(null);

  const detectScroll = useCallback(() => {
    if (scrollY.get() < scrollY.getPrevious() && scrollY.get() !== 0) {
      setScrollDirection(true);
    } else setScrollDirection(false);
  }, []);

  useEffect(() => {
    scrollY.on('change', detectScroll);
    const hideMenuOnScroll = () => setIsOpen(false);
    window.addEventListener('scroll', hideMenuOnScroll);
    return () => {
      scrollY.clearListeners();
      window.removeEventListener('scroll', hideMenuOnScroll);
    };
  }, [detectScroll]);

  const NAV_LINKS = [
    {
      to: '/games',
      name: 'Live Games',
      mobileNavs: [
        { to: '/ler', name: 'Live Roulette' },
        { to: '/bj', name: 'Blackjack' },
        { to: '/keno', name: 'Keno' },
        { to: '/mw', name: 'Music Wheel' },
      ],
    },
    { to: '/about', name: 'About Us' },
    { to: '/blog', name: 'Blog' },
    { to: '/contacts', name: 'Contacts' },
  ];

  const LIST_ANIMATION = {
    desktop: {},
    default: {
      opened: {
        transition: {
          staggerChildren: 0.18,
        },
      },
      closed: {
        transition: {
          staggerChildren: 0.06,
          staggerDirection: -1,
        },
      },
    },
  };

  const CHILD_LIST_ANIMATION = {
    childOpened: {
      height: 'auto',
      opacity: 1,
      scaleY: 1,
      marginTop: 16,
      transition: {
        duration: 0.8,
      },
    },
    childClosed: {
      height: 0,
      opacity: 0,
      scaleY: 0,
      marginTop: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const LIST_ITEM_ANIMATION = {
    desktop: {},
    default: {
      opened: {
        opacity: 1,
        y: '0%',
        transition: {
          duration: 0.4,
          ease: 'easeOut',
        },
      },
      closed: {
        opacity: 0,
        y: '100%',
        transition: {
          duration: 0.25,
          ease: 'easeInOut',
        },
      },
    },
  };

  const NAV_BAR_ANIMATION = {
    default: {
      opened: {
        backgroundColor: 'rgba(18, 18, 18, 0.2)',
        backdropFilter: 'blur(12px)',
        '-webkit-backdrop-filter': 'blur(12px)',
        transition: {
          duration: 0.4,
          ease: 'easeOut',
        },
      },
      closed: {
        backgroundColor: 'rgba(18, 18, 18, 0)',
        backdropFilter: 'blur(0px)',
        '-webkit-backdrop-filter': 'blur(0px)',
        transition: {
          duration: 0.25,
          ease: 'easeInOut',
        },
      },
    },
  };

  const NAV_BAR_NONE = {
    default: {
      opened: {
        display: 'flex',
      },
      closed: {
        transitionEnd: {
          display: 'none',
        },
      },
    },
  };

  return (
    <motion.div
      layout
      ref={headerRef}
      className={classnames(classes.header, {
        [bc._open]: isOpen,
        [bc._fixed]: scrollDirection || isOpen,
      })}
    >
      <motion.div
        animate={isOpen ? 'opened' : 'closed'}
        variants={NAV_BAR_ANIMATION[variantsKey]}
        className={bc['__logo-container']}
      >
        <Link href="/">
          <Image width={168} height={67} src={iconLogo} alt="logo" />
        </Link>
        <div onClick={() => setIsOpen(!isOpen)} className={bc['__burger-menu']} />
      </motion.div>
      <motion.nav
        initial="closed"
        animate={isOpen ? 'opened' : 'closed'}
        variants={merge(NAV_BAR_NONE[variantsKey], NAV_BAR_ANIMATION[variantsKey])}
        className={bc['__navigation-bar']}
      >
        <motion.ul variants={LIST_ANIMATION[variantsKey]} className={bc['__nav-list']}>
          {NAV_LINKS.map(({ to, name, mobileNavs }, id) => (
            <motion.li
              whileTap={{ scale: 0.95 }}
              variants={LIST_ITEM_ANIMATION[variantsKey]}
              key={to}
              onClick={() => {
                if (isMobile && mobileNavs) {
                  setOpenedChildNav(id);
                }
                if (id === openedChildNav) {
                  setOpenedChildNav(null);
                }
                setIsOpen(false);
              }}
              className={classnames(bc['__nav-item'], {
                [bc['__nav-item_open']]: to === pathname,
              })}
            >
              {Array.isArray(mobileNavs) && isMobile ? (
                <>
                  <p className={bc['__child-nav-title']}>
                    {name}
                    <span className={bc['__child-nav-arrow']}>
                      <Image src={Arrow} alt="icon" width={12} height={12} />
                    </span>
                  </p>
                  <AnimatePresence initial={false}>
                    openedChildNav === id && (
                    <motion.div
                      animate={id === openedChildNav ? 'childOpened' : 'childClosed'}
                      variants={CHILD_LIST_ANIMATION}
                      className={bc['__child-nav-list']}
                    >
                      {mobileNavs.map(({ to: mobileTo, name: mobileName }) => (
                        <Link key={mobileTo} href={mobileTo}>
                          {mobileName}
                        </Link>
                      ))}
                    </motion.div>
                    )
                  </AnimatePresence>
                </>
              ) : (
                <Link key={to} href={to}>
                  {name}
                </Link>
              )}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          variants={LIST_ITEM_ANIMATION[variantsKey]}
          className={bc['__button-container']}
        >
          <Link href="demo">
            <PrimaryButton text="Play" className={bc.__button} />
          </Link>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
};

export default Header;
