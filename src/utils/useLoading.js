import { useState, useCallback } from "react";

function useLoading() {
  const [loadingState, setLoadingState] = useState(false);

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
      setLoadingState(true); // 開始 loading
      if (timer) clearTimeout(timer); // timer若存在，則清除舊timer
      timer = setTimeout(async () => {
        try {
          await fn();
          setLoadingState(false); // 結束 loading
          timer = null;
        } catch (err) {
          console.error(err);
        }
      }, delay);
    };
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const doLoading = useCallback(debounce(), []);
  // state變更會刷新閉包, 用 useCallback 固定記憶體位置

  return [loadingState, doLoading, onLoading, doneLoading];
}

export default useLoading;
