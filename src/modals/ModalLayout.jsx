import React from "react";
import Modal from "react-modal";

function ModalLayout({ children, closeModal, modalIsOpen }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="modal-overlay"
      // style={customStyles}
      className="max-w-3xl bg-white mt-14 mx-auto max-h-450  h-full "
      // contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
}

export default ModalLayout;
