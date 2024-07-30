import { useEffect } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useGetHeight(
  ref: React.RefObject<any>,
  setHeight: (v: number) => void
) {
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current)
      setHeight(ref.current.offsetHeight);
    }
  }, [ref.current]);
}
