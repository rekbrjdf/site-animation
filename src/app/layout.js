'use client';

import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { DeviceProvider } from 'utils/Context/DeviceContext';
import 'public/scss/common.scss';
import { add100vhCSSVar } from 'utils/functions';
import Footer from 'components/adaptive/Footer';
import Header from 'components/adaptive/Header';
import { ReactLenis } from '@studio-freight/react-lenis';
import { StyledEngineProvider } from '@mui/material/styles';
import CookieModal from '@app/components/adaptive/CookieModal';
import CheckAgeModal from '@app/components/adaptive/CheckAgeModal';

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const [isCookieOpen, setCookieOpen] = useState(false);
  const [isAgeModalOpen, setAgeModalOpen] = useState(false);

  const ageConfirmationCheck = () => {
    setAgeModalOpen(!localStorage.getItem('ageChecked'));
  };

  const ageModalHandler = () => {
    localStorage.setItem('ageChecked', 'true');
    setAgeModalOpen(false);
  };

  const cookieHandler = () => {
    localStorage.setItem('cookieChecked', 'true');
    setCookieOpen(false);
  };

  useEffect(() => {
    // Первая инициализация
    add100vhCSSVar();
    ageConfirmationCheck();
    window.addEventListener('resize', add100vhCSSVar);
    return () => window.removeEventListener('resize', add100vhCSSVar);
  }, []);

  useEffect(() => {
    setCookieOpen(localStorage.getItem('ageChecked') && !localStorage.getItem('cookieChecked'));
  }, [isAgeModalOpen]);

  return (
    <ReactLenis root>
      <html lang="en" suppressHydrationWarning>
        {/* библиотека current-device добавляет классы устройства на <html>
          из-за этого в консоли возникает ошибка "Extra attributes from the server: class"
          suppressHydrationWarning={true} нужен, чтобы этой ошибки не было в консоли */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body className={inter.className}>
          <StyledEngineProvider injectFirst>
            <AppRouterCacheProvider>
              <DeviceProvider>
                <CheckAgeModal isActive={isAgeModalOpen} onClick={() => ageModalHandler()} />
                <CookieModal isOpened={isCookieOpen} onClick={() => cookieHandler()} />
                <Header />
                {children}
                <Footer />
              </DeviceProvider>
            </AppRouterCacheProvider>
          </StyledEngineProvider>
        </body>
      </html>
    </ReactLenis>
  );
}
