import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LiaFacebookSquare, LiaTelegramPlane } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

import Modal from "../components/common/modal";

import "../styles/shareModal.css";

const shareModal = ({ showModal, setShowModal }) => {
  const iconsGridData = [
    { icon: <FaInstagram className="icon" />, name: "Instagram" },
    { icon: <LiaFacebookSquare className="icon" />, name: "Facebook" },
    { icon: <FaWhatsapp className="icon" />, name: "Whatsapp" },
    { icon: <LiaTelegramPlane className="icon" />, name: "Telegram" },
    { icon: <RiTwitterXLine className="icon" />, name: "Twitter" },
    { icon: <CiLinkedin className="icon" />, name: "LinkedIn" },
  ];
  async function handleCancel(event) {
    event.stopPropagation();
    setShowModal(false);
  }
  return (
    <div>
      <Modal
        title={"Share on other apps"}
        isOpen={showModal}
        centered={true}
        cancelModalHandler={handleCancel}
        className={"share-modal"}
      >
        <div className="share-modal-content">
          {iconsGridData.map((item, index) => (
            <div className="icon-box" key={index}>
              <div className="icon-container">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="share-modal-footer">
          <span>Copy link</span>
          <div className="share-link-section">
            <input type="text" placeholder="https:// luckyandgenius.com/" />
            <button
              style={{
                backgroundColor: "#4B6CC2",
                border: "none",
                borderRadius: "25px",
                fontSize: "12px",
                padding: "8px 24px",
                color: "#fff",
              }}
            >
              Copy url
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default shareModal;
