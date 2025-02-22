'use client';

import { useEffect, useState } from 'react';

const useIsClientSide = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

// eslint-disable-next-line no-unused-vars
const useDeviceContext = () => {};

// eslint-disable-next-line import/prefer-default-export
export { useIsClientSide };
