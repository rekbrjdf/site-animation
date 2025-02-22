import { usePathname, useSearchParams } from 'next/navigation';
import { useLenis } from '@studio-freight/react-lenis';
import { useEffect } from 'react';

const ScrollReset = () => {
  const lenis = useLenis();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!lenis) return;
    const handleRouteChange = () => {
      lenis.scrollTo(0, { immediate: true });
    };
    handleRouteChange();
  }, [lenis, pathname, searchParams]);

  return null;
};

export default ScrollReset;
