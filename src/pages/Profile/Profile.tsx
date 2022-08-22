import { isEmpty } from 'lodash';
import React, { FC, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HouseIcon from '@mui/icons-material/House';
import SchoolIcon from '@mui/icons-material/School';
import { Divider, ImageList, Typography } from '@mui/material';
import { IJobs, ISchool } from '@redux/components/matches/__types__/matches.tinder.response';
import {
  useGetMatchByIdQuery,
  useLazyDislikeMatchQuery,
  useLazyLikeMatchQuery,
} from '@redux/components/matches/matches.api';
import { useAppSelector } from '@redux/hooks';
import { CardButton } from '@shared/components/Card/styles';
import Carousel from '@shared/components/modals/Carousel/Carousel';

import {
  ImageListItem,
  ProfileActionsContainer,
  ProfileContainer,
  ProfileDescriptionContainer,
  ProfileDescriptionField,
  ProfileImagesContainer,
} from './styles';

const enum Actiontype {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

const Profile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { id } = useParams();
  const login = useAppSelector((data) => data.login);
  const { data, isLoading } = useGetMatchByIdQuery({ id, token: login.token });
  const [handleLike] = useLazyLikeMatchQuery();
  const [handleDislike] = useLazyDislikeMatchQuery();

  const openModalCarousel = (index) => {
    setSelectedImageIndex(index);
    setIsOpen((e) => !e);
  };

  const hanldleActionClick = useCallback(
    (name: string, tinderId = id, token = login.token) =>
      name == Actiontype.LIKE ? handleLike({ id: tinderId, token }) : handleDislike({ id: tinderId, token }),
    [handleDislike, handleLike, login, id],
  );
  return (
    <div>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <ProfileContainer>
          <ProfileDescriptionContainer>
            <Divider>
              <Typography>Общая информация</Typography>
            </Divider>
            <ProfileDescriptionField>{`${data.name} ${data.birthDate}`}</ProfileDescriptionField>
            {isEmpty(data.jobs) &&
              data.jobs.map((job: IJobs) => (
                <ProfileDescriptionField key={`${job.company}${job.title}-${id}`}>
                  <HomeRepairServiceIcon />
                  <>где: {job.company}</>
                  <>кто: {job.title}</>
                </ProfileDescriptionField>
              ))}
            {isEmpty(data.schools) &&
              data.schools.map((school: ISchool) => (
                <ProfileDescriptionField key={`${school.displayed}${school.name}-${id}`}>
                  <SchoolIcon />
                  <> {school.name}</>
                </ProfileDescriptionField>
              ))}
            <ProfileDescriptionField>
              <HouseIcon />
              {data.city.name}
            </ProfileDescriptionField>
            <Divider>
              <Typography>Описание</Typography>
            </Divider>
            <ProfileDescriptionField>{data.bio}</ProfileDescriptionField>
            <ProfileDescriptionField></ProfileDescriptionField>
          </ProfileDescriptionContainer>

          <ProfileActionsContainer>
            <CardButton bg="red" onClick={() => hanldleActionClick(Actiontype.DISLIKE)}>
              DELETE
            </CardButton>
            <CardButton onClick={() => hanldleActionClick(Actiontype.LIKE)}> MATCH </CardButton>
          </ProfileActionsContainer>

          <ProfileImagesContainer>
            <ImageList sx={{ width: 1200 }} cols={3}>
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
              <Carousel isOpen={isOpen} selectedIndex={selectedImageIndex} photos={data.photos} setIsOpen={setIsOpen} />
            </ImageList>
          </ProfileImagesContainer>
        </ProfileContainer>
      )}
    </div>
  );
};

export default Profile;
