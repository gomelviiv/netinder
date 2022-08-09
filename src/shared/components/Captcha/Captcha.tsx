import React, { FC } from 'react';
import Modal from 'react-modal';

interface Props {
  closeModal: () => void;

  modalIsOpen: boolean;
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Captcha: FC<Props> = ({ closeModal, modalIsOpen }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} contentLabel="Example Modal">
      Captcha
    </Modal>
  );
};

export default Captcha;
