import React from 'react';
import { createPortal } from 'react-dom';

import { ModalWrapper, ModalContent } from './Modal.css';


const Modal = ({ children, width, onClose, open }) => {

  const handleCloseModal = e => {
    e.stopPropagation();
    onClose();
  }

  return createPortal(
    <ModalWrapper onClick={handleCloseModal} open={open}>
      <ModalContent onClick={e => e.stopPropagation()} width={width}>
        {children}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal')
  )
}

export default Modal;
