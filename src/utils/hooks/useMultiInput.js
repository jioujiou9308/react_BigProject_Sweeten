import { useRef } from "react";

const useMultiInput = (keys) => {
  const multiRef = useRef({});
  // 驗證 array
  if (!Array.isArray(keys))
    throw console.error(
      "useMultiInput : 需要一個包含 name 屬性的陣列以產生 <input />"
    );

  // 製作 input 標籤
  const Inputs = {};
  keys.forEach((name, i) => {
    //驗證 name 格式
    if (typeof name !== "string")
      console.error(`useMultiInput : 陣列元素[${i}]非字串`);
    if (name.match(/^[A-Za-z]+$/) == null)
      console.error(`useMultiInput : 陣列元素[${i}]包含非字母元素`);

    // 字首轉換大寫
    name = name[0].toUpperCase() + name.slice(1);

    // elements = { [name] = function Inputs, ... }
    Inputs[name] = (props) => (
      <input
        {...{
          ...props,
          name: props.name || name,
          placeholder: props.placeholder || name,
          ref: (current) => (multiRef.current[name] = current),
        }}
      />
    );
  });

  //   multiRef.get() 獲得當前 value
  multiRef.get = () => {
    const result = {};
    for (let key in multiRef.current) {
      result[key] = multiRef.current[key].value;
    }
    return result;
  };

  //   multiRef.get() 清空 value
  multiRef.clear = () => {
    for (let key in multiRef.current) {
      multiRef.current[key].value = "";
    }
  };

  return [Inputs, multiRef];
};
export default useMultiInput;
