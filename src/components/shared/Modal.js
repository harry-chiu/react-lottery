import React from 'react';
import Styled from '../../styles';

const Modal = ({ children, open, setOpen }) => {
  const closeModal = () => setOpen(false);

  return (
    <Styled.Modal
      open={open}
      onClick={closeModal}
    >
      {children}
    </Styled.Modal>
  );
};

export default Modal;