import { useCallback, useState } from "react";

export const useArray = (array: unknown[], initialStep = 0) => {
  if (initialStep >= array.length || initialStep < 0)
    throw new Error("Index out of bounds");

  const [index, setIndex] = useState(initialStep);

  const next = useCallback(() => {
    if (index === array.length - 1) setIndex(0);
    else setIndex(index + 1);
  }, [index]);

  const prev = useCallback(() => {
    if (index === 0) setIndex(array.length - 1);
    else setIndex(index - 1);
  }, [index]);

  return { value: array[index], next, prev };
};
