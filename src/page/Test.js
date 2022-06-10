import React from "react";
import { useLoading, useCollapse } from "../utils/hooks";

const Test = () => {
  const [loadingListener, runLoading] = useLoading();
  const [Collapse, switchCollapse] = useCollapse();

  function setReq() {
    runLoading(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1") // fake API
        .then((response) => response.json())
        .then((json) => console.log(json));
    });
  }

  const renderJSX = <p>done loading</p>;
  const loadingJSX = <p>on loading</p>;
  return (
    <>
      <button onClick={setReq}>sendReq</button>
      {
        loadingListener(renderJSX, loadingJSX)
        /* isLoading ? loadingJSX : renderJSX */
      }
      <button
        onClick={() => {
          switchCollapse.switch();
        }}
      >
        switch
      </button>
      <Collapse onOpen={<p>hi</p>} onClose={<p>close</p>} />
    </>
  );
};

export default Test;
