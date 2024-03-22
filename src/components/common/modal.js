import React from "react";
import { Modal } from "antd";

const MyModal = ({
  title,
  centered,
  isOpen,
  sumbitHandler,
  cancelModalHandler,
  okText,
  cancelText,
  className,
  children,
  footer,
  closeIcon,
}) => (
  <Modal
    title={title}
    centered={centered}
    open={isOpen}
    onOk={sumbitHandler}
    onCancel={cancelModalHandler}
    okText={okText}
    cancelText={cancelText}
    className={`font-poppins flex flex-start ${className}`}
    footer={footer}
    closeIcon={closeIcon}
  >
    {children}
  </Modal>
);

export default MyModal;
