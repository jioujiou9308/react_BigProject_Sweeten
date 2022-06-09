# Custom Hook

## useLoading

[source](https://github.com/Holin5566/sweeten/blob/master/src/utils/useLoading.js "Source")

### Example

```javascript
import useLoading from "./path";

const Demo = () => {
  const [loadingListener, runLoading] = useLoading();

  const setReq = () => {
    runLoading(() => {
      // START // isLoading = true
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json));
    });
    // DONE // isLoading = false
  };

  const renderJSX = <p>done loading</p>;
  const loadingJSX = <p>on loading</p>;
  return (
    <>
      <button onClick={setReq}>sendReq</button>
      {
        loadingListener(renderJSX, loadingJSX)
        /* isLoading ? loadingJSX : renderJSX */
      }
    </>
  );
};
```

#### 1. loadingListener

loadingListener( [renderElement], [LoadingElement] );

- ###### [renderElement]
  loading 完成的渲染元件
- ###### [LoadingElement]
  loading 中的渲染元件, 預設為 loading 字樣

###### Code:

```javascript
 const loadingListener = (renderJSX, loadingJSX = <p>loading</p>) => {
    return <>{loadingState ? loadingJSX : renderJSX}</>;
```

#### 2. runLoading

runLoading( [asyncFunc], [delay] );

- ###### [asyncFunc]
  發送 req 的方法, EX. fetch, axios
- ###### [delay]
  節流的延遲時間, default = 300ms

###### Example:

```javascript
// 1000ms 後顯示 data
// 期間若觸發則重新計時
runLoading(() => {
  fetch(url)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}, 1000);
```

###### Code:

```javascript
// 節流
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
// state變更會刷新閉包, 用 useCallback 固定記憶體位置
const runLoading = useCallback(debounce(), []);
```
