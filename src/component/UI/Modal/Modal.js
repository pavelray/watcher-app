import React, { Fragment, useEffect, useState } from "react";
import "./Modal.scss";

export default function Modal({ children, open, onModalClose}) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const onClose = () => {
    setOpen(false);
    onModalClose();
  };

  return (
    <Fragment>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <div className="modal-content__body">{children}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
