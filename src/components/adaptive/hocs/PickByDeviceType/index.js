'use client';

import React, { useContext } from 'react';
import DeviceContext from 'utils/Context/DeviceContext';
import { useIsClientSide } from 'utils/hooks';

function PickByDeviceType({ Desktop, Mobile }) {
  const isClient = useIsClientSide();
  const device = useContext(DeviceContext);

  if (!isClient) return <Desktop />;

  return device?.deviceType === 'desktop' ? <Desktop /> : <Mobile />;
}

export default PickByDeviceType;
