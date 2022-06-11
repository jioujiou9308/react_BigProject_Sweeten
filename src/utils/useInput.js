import { useRef } from "react";

const useInput = () => {
  const inputRef = useRef();
  const Input = (porps) => {
    console.log(inputRef.current);
    return <input {...porps} ref={inputRef} />;
  };

  const getValue = () => {
    return inputRef.current.value;
  };
  return [Input, getValue];
};
export default useInput;
// DEMO https://codesandbox.io/s/goofy-keller-zn811o?file=/src/useInput.js
