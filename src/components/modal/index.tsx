import React from "react"
import ReactModal from "react-modal";

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
    return (
        <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {children}
      </ReactModal>
    )
}