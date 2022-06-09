import React from "react";
import { useLoading } from "../utils/hooks";

const Test = () => {
  const [isLoading, doLoading] = useLoading();
  return (
    <div>
      Test
      <h1
        onClick={() => {
          doLoading(() => {
            fetch("https://jsonplaceholder.typicode.com/todos/1")
              .then((response) => response.json())
              .then((json) => console.log(json));
          });
        }}
      >
        {isLoading ? "loading" : "done"}
      </h1>
    </div>
  );
};

export default Test;
