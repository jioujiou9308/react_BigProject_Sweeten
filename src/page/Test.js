import React from "react";
import { useLoading } from "../utils/hooks";

const Test = () => {
  const [loadingListener, runLoading] = useLoading();
  return (
    <div>
      Test
      <button
        onClick={() => {
          runLoading(() => {
            fetch("https://jsonplaceholder.typicode.com/todos/1")
              .then((response) => response.json())
              .then((json) => console.log(json));
          });
        }}
      >
        sendReq
      </button>
      {loadingListener(
        <div>
          <h1>done</h1>
          <h1>done</h1>
          <h1>done</h1>
          <h1>done</h1>
        </div>,
        <p>placeholder</p>
      )}
    </div>
  );
};

export default Test;
