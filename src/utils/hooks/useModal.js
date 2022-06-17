import React, { useState } from "react";

const useModal = () => {
  const [isOpen, setOpen] = useState(false);
  const Modal = {
    open: () => setOpen(true),
    close: () => setOpen(false),
    Element: (props) => {
      return <>{isOpen && <div {...props}>Modal</div>}</>;
    },
  };
  // const Modal = (props) => {
  //   return <>{isOpen && <div {...props}>Modal</div>}</>;
  // };

  return Modal;
};

export default useModal;
