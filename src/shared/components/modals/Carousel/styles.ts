import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styled from '@emotion/styled';

const ReactModal = styled(Modal)`
  margin: 0 auto;
  background-color: #ffffff29;
  max-width: 600px;

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
  }
`;

const CarouselLib = styled(Carousel)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .thumbs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export { ReactModal, CarouselLib };
