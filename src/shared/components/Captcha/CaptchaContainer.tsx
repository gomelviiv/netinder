import React, { FC, useState } from 'react';

import Captcha from './Captcha';

interface Props {
  isOpen: boolean;
}

const CaptchaContainer: FC<Props> = ({ isOpen }) => {
  const [modalIsOpen, setIsOpen] = useState(isOpen);

  //   useEffect(() => {
  //     setIsOpen(isOpen);
  //   }, [isOpen]);

  //   const openModal = () => {
  //     setIsOpen(true);
  //   };

  const closeModal = () => {
    setIsOpen(false);
  };
  return <Captcha modalIsOpen={modalIsOpen} closeModal={closeModal} setIsOpen={setIsOpen} />;
};

export default CaptchaContainer;
