import { useEffect, useState } from 'react';

export const useCssVariable = (key: string) => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const root = document.querySelector('html');
    if (root) {
      const cssValue = getComputedStyle(document.documentElement).getPropertyValue(key);
      setValue(cssValue);
    }
  }, []);

  return value;
};
