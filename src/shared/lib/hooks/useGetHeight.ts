import { useEffect } from 'react';
import { useAppSelector } from './reduxHooks';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useGetHeight(
  ref: React.RefObject<any>,
  setHeight: (v: number) => void
) {
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref.current, user]);
}
