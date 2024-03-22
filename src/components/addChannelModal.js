import React from "react";
import Modal from "../components/common/modal";
import "../styles/addChannelModal.css";

const addChannelModal = ({ setShowModal, showModal }) => {
  async function handleCancel(event) {
    event.stopPropagation();
    setShowModal(false);
  }
  return (
    <div>
      <Modal
        title={"Add Channel"}
        isOpen={showModal}
        centered={true}
        cancelModalHandler={handleCancel}
        className="add-channel-modal"
      >
        <div className="section-1">
          <input type="text" placeholder="Enter Channel Url" />
        </div>
        <div className="section-2">
          <button onClick={handleCancel} className="cancel">
            Cancel
          </button>
          <button className="add">ADD</button>
        </div>
      </Modal>
    </div>
  );
};

export default addChannelModal;
