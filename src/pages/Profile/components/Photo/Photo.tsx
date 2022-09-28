import React, { FC, memo, useState } from 'react';

import { IMatchProfile } from '@redux/components/matches/__types__/matches';
import Carousel from '@shared/components/modals/Carousel/Carousel';

import { ImageListContainer, ImageListItem, ProfileImagesContainer } from './styles';

interface Props {
  data: IMatchProfile;
}

const Photo: FC<Props> = ({ data }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModalCarousel = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen((e) => !e);
  };

  return (
    <ProfileImagesContainer>
      <ImageListContainer cols={3}>
        {data.photos?.map((photo, index) => (
          <ImageListItem key={photo.id}>
            <img
              src={`${photo.url}`}
              srcSet={`${photo.url}`}
              alt={photo.fileName}
              loading="lazy"
              onClick={() => openModalCarousel(index)}
            />
          </ImageListItem>
        ))}
        <Carousel
          isOpen={isOpen}
          selectedIndex={selectedImageIndex}
          photos={data.photos}
          setIsOpen={setIsOpen}
        />
      </ImageListContainer>
    </ProfileImagesContainer>
  );
};

export default memo(Photo);
