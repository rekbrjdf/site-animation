'use client';

import React, { createContext, useEffect, useMemo, useState } from 'react';
import UAParser from 'ua-parser-js';
import { useIsClientSide } from 'utils/hooks';

const DeviceContext = createContext();

export default DeviceContext;
export const DeviceProvider = ({ children }) => {
  const isClient = useIsClientSide();
  const [device, deviceModel, browser, mediaQueryList] = useMemo(() => {
    if (!isClient) return [{}, null, null, null];
    // eslint-disable-next-line no-shadow, global-require
    const device = require('current-device').default;
    const parsedUA = new UAParser().getResult();
    // eslint-disable-next-line no-shadow
    let deviceModel;
    if (device.ipad()) {
      deviceModel = 'iPad';
    } else {
      deviceModel = parsedUA.device.model;
    }
    // eslint-disable-next-line no-shadow
    let browser;
    if (/HuaweiBrowser/.test(navigator.userAgent)) {
      browser = { name: 'huawei' };
    } else if (/UCBrowser/.test(navigator.userAgent)) {
      browser = { name: 'ucbrowser' };
    } else {
      browser = {
        ...parsedUA.browser,
        name: parsedUA.browser.name.toLowerCase(),
      };
    }
    // eslint-disable-next-line no-shadow
    const mediaQueryList = window.matchMedia('(orientation: portrait)');
    return [device, deviceModel, browser, mediaQueryList];
  }, [isClient]);

  const [deviceOrientation, setOrientation] = useState(
    mediaQueryList?.matches ? 'portrait' : 'landscape',
  );

  const handleOrientationChange = (e) => {
    setOrientation(e?.matches ? 'portrait' : 'landscape');
    // Добавляем и удаляем классы вручную, без этого не работает на айосе
    const htmlClasses = document.documentElement.classList;
    htmlClasses.add(e?.matches ? 'portrait' : 'landscape');
    htmlClasses.remove(e?.matches ? 'landscape' : 'portrait');
  };

  useEffect(() => {
    handleOrientationChange(mediaQueryList);
    if (mediaQueryList?.addEventListener) {
      mediaQueryList.addEventListener('change', handleOrientationChange);
    } else {
      mediaQueryList?.addListener(handleOrientationChange);
    }
    return () => {
      if (mediaQueryList?.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleOrientationChange);
      } else {
        mediaQueryList?.removeListener(handleOrientationChange);
      }
    };
  }, [mediaQueryList]);

  return (
    <DeviceContext.Provider
      value={{
        deviceType: device.type,
        deviceOrientation,
        deviceModel,
        deviceOs: device.os,
        browser,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
