import { useCallback, useState, useEffect } from 'react';
import { useMounted } from './useMounted';

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [stateValue, setStateValue] = useState(initialValue);
  const isMounted = useMounted();

  const getValue = useCallback(() => {
    if (!isMounted) {
      return;
    }

    try {
      const item = window.localStorage.getItem(key);

      if (!item) {
        return initialValue;
      }

      const parsedItem = JSON.parse(item) as T;
      return parsedItem;
    } catch (err) {
      console.warn(`Cannot read value in localStorage of key ${key}`, err);
      return initialValue;
    }
  }, [isMounted, key, initialValue]);

  const setValue = useCallback(
    (value: T) => {
      if (!isMounted) {
        return;
      }

      try {
        window.localStorage.setItem(key, JSON.stringify(value));

        setStateValue(value);
      } catch (err) {
        console.warn(`Cannot set value in localStorage of key ${key}`, err);
      }
    },
    [isMounted, key],
  );

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const item = getValue();
    if (item) {
      setStateValue(item);
    }
  }, [getValue, isMounted]);

  return [stateValue, setValue];
};
