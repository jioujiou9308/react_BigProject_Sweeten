import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import React from "react";

const Modal = (props) => {
  return (
    <Dialog {...props}>
      {props.header && <DialogHeader>header</DialogHeader>}
      <DialogBody divider>{props.body}</DialogBody>
      {props.footer && (
        <DialogFooter>
          Footer{" "}
          <Button
            variant="text"
            color="red"
            onClick={props.handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={props.handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      )}
    </Dialog>
  );
};

export default Modal;
