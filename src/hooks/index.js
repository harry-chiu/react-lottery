import {
  useRef,
  useEffect,
} from 'react';

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  // 如果 delay 不為 null 就設定計時器
  // 第二個參數放入 delay 作為依賴
  // 所以可以達到 delay 改變為 null 時清除(暫停)計時器
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let interval = setInterval(tick, delay);
      return () => clearInterval(interval);
    }
  }, [delay]);
};