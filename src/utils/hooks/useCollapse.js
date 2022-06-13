import { useState } from "react";

const useCollapse = () => {
  const [isOpen, setIsOpen] = useState(true);

  const Collapse = (props) => {
    const { onOpen, onClose } = props;
    if (!onOpen) return console.error("請設定 onOpen (type:JSX)");
    return <>{isOpen ? onOpen : onClose}</>;
  };

  const control = {
    on: () => {
      setIsOpen(true);
    },
    off: () => {
      setIsOpen(false);
    },
    switch: () => {
      setIsOpen(!isOpen);
    },
  };

  return [Collapse, control, isOpen];
};

export default useCollapse;
