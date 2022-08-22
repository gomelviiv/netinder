import React, { FC } from 'react';

import { IPhoto } from '@redux/components/matches/__types__/matches.tinder.response';

import { CarouselLib, ReactModal } from './styles';

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  photos: IPhoto[];
  selectedIndex: number;
}

const Carousel: FC<Props> = ({ isOpen, setIsOpen, photos, selectedIndex }) => {
  const closeModal = () => {
    setIsOpen((e: boolean) => !e);
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false} contentLabel="Carousel Modal">
      <CarouselLib selectedItem={selectedIndex} dynamicHeight={false} showIndicators={false} showStatus={false}>
        {photos.map((photo) => (
          <img key={photo.id} src={`${photo.url}`} srcSet={`${photo.url}`} alt={photo.fileName} loading="lazy" />
        ))}
      </CarouselLib>
    </ReactModal>
  );
};

export default Carousel;
