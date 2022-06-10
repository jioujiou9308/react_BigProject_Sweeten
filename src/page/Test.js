import React from "react";
import { useLoading, useCollapse } from "../utils/hooks";
import { useFavoriteState } from "../utils/hooks-redux";

const Test = () => {
  const [loadingListener, runLoading] = useLoading();
  const [Collapse, switchCollapse] = useCollapse();
  const [test, setTest] = useFavoriteState();
  function setReq() {
    runLoading(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1") // fake API
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((e) => console.log(e));
    });
  }

  const renderJSX = <p>render</p>;
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
          setTest("dispatch");
          console.log(test);
        }}
      >
        switch
      </button>
      {/* <h2>{courses}</h2> */}
      <Collapse onOpen={<p>hi</p>} onClose={<p>close</p>} />
    </>
  );
};

export default Test;
