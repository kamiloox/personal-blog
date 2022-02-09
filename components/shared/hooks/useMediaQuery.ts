import { useEffect, useState } from 'react';
import { Breakpoint } from '../../../types/types';
import { useCssVariable } from './useCssVariable';
import { useMounted } from './useMounted';

export const useMediaQuery = (breakpoint: Breakpoint) => {
  const mediaWidth = useCssVariable(breakpoint);
  const [matches, setMatches] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const mounted = useMounted();

  useEffect(() => {
    if (!mediaWidth) {
      return;
    }

    const media = window.matchMedia(`(max-width: ${mediaWidth})`);

    if (mounted && isLoading) {
      setIsLoading(false);
    }

    const updateMatches = () => {
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    };

    updateMatches();

    media.addEventListener('change', updateMatches);
    return () => media.removeEventListener('change', updateMatches);
  }, [mediaWidth, matches, mounted, isLoading]);

  return { isLoading, matches };
};
