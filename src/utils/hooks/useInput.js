import { useRef } from "react";

const useInput = () => {
  const inputRef = useRef();
  const Input = (porps) => {
    return <input {...{ ...porps, ref: inputRef }} />;
  };
  return [Input, inputRef.current];
};
export default useInput;
// DEMO https://codesandbox.io/s/goofy-keller-zn811o?file=/src/useInput.js
