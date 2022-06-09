import { useState, useCallback } from "react";

// NOTE useLoading
export function useLoading() {
  const [loadingState, setLoadingState] = useState(true);

  const onLoading = () => {
    setLoadingState(true);
  };
  const doneLoading = () => {
    setLoadingState(false);
  };

  // 防抖
  const debounce = () => {
    let timer = null;
    return (fn, delay = 300) => {
      // 開始 loading
      setLoadingState(true);
      if (timer) clearTimeout(timer);
      timer = setTimeout(async () => {
        try {
          await fn();
          // 結束 loading
          setLoadingState(false);
          timer = null;
        } catch (e) {
          console.error(e);
        }
      }, delay);
    };
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const doLoading = useCallback(debounce(), []);
  // state變更會刷新閉包, 用 useCallback 固定記憶體位置

  return [loadingState, doLoading, onLoading, doneLoading];
}
