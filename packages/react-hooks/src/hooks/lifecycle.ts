import { useEffect, useLayoutEffect, useCallback, useRef } from "react";

export const useOnMount = (fn: () => void) => useEffect(fn, []);

export const useBeforeOnMount = (fn: () => void) => useLayoutEffect(fn, []);

export const useOnRender = (fn: () => void) => useEffect(fn);

export const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => void (isMounted.current = false);
  }, []);

  return useCallback(() => isMounted.current, []);
};
