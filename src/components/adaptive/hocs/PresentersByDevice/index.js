'use client';

import React from 'react';
import PickByDeviceType from 'components/adaptive/hocs/PickByDeviceType';
import PresentersMobile from 'components/mobile/Presenters';
import PresentersDesktop from 'components/desktop/Presenters';

function PresentersByDevice({ data }) {
  const Desktop = () => <PresentersDesktop data={data} />;
  const Mobile = () => <PresentersMobile data={data} />;
  return <PickByDeviceType Desktop={Desktop} Mobile={Mobile} />;
}

export default PresentersByDevice;
