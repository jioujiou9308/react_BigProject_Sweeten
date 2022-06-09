# Custom Hook

## useLoading
### Start :
```javascript
const [loadingState, doLoading, onLoading, doneLoading] = useLoading();
```

------------


#### 1. loadingState
```javascript
// loadingState : boolean // default = false
const [loadingState, setLoadingState] = useState(false);
```

#### 2. doLoading
doLoading( [asyncFunc], [delay] );
* ###### [asyncFunc] 
發送 req 的方法, EX. fetch, axios
* ###### [delay]
節流的延遲時間, default = 300ms

###### Example:
 ```javascript
 // 1000ms後顯示 data
 doLoading(()=>{
 fetch(url)
  .then(data=>console.log(data))
  .catch(err=>console.log(err));
 },1000);

```
###### Code:
```javascript
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
const doLoading = useCallback(debounce(), []); // state變更會刷新閉包, 用 useCallback 固定記憶體位置
```

#### 3. onLoading
```javascript
// turn loadingState to true
const onLoading = () => {
  setLoadingState(true);
};
```

#### 4. doneLoading
```javascript
// turn loadingState to false
const doneLoading = () => {
  setLoadingState(false);
};
```
