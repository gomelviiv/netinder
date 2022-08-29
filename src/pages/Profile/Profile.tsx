import { isEmpty } from 'lodash';
import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HouseIcon from '@mui/icons-material/House';
import SchoolIcon from '@mui/icons-material/School';
import { Divider, ImageList, Skeleton, Typography } from '@mui/material';
import { IJobs, ISchool } from '@redux/components/matches/__types__/matches.tinder.response';
import { useGetMatchByIdQuery } from '@redux/components/matches/matches.api';
import { useAppSelector } from '@redux/hooks';
import LikeDislikeButtons from '@shared/components/LikeDislikeButtons';
import Carousel from '@shared/components/modals/Carousel/Carousel';

import {
  ImageListItem,
  ProfileActionsContainer,
  ProfileContainer,
  ProfileDescriptionContainer,
  ProfileDescriptionField,
  ProfileImagesContainer,
} from './styles';

const Profile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { id } = useParams();
  const loginState = useAppSelector((data) => data.login);
  const { data, isLoading } = useGetMatchByIdQuery({
    id,
    token: loginState.token,
    phoneNumber: loginState.phoneNumber,
  });

  const openModalCarousel = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen((e) => !e);
  };

  return (
    <div>
      {isLoading ? (
        <ProfileContainer>
          <ProfileDescriptionContainer>
            <Divider>
              <Typography>Общая информация</Typography>
            </Divider>
            <ProfileDescriptionField>
              <Skeleton animation="wave" variant="text" width="100%" height={40} />
            </ProfileDescriptionField>

            <ProfileDescriptionField>
              <HomeRepairServiceIcon />
              <Skeleton animation="wave" variant="text" width="100%" height={40} />
            </ProfileDescriptionField>

            <ProfileDescriptionField>
              <SchoolIcon />
              <Skeleton animation="wave" variant="text" width="100%" height={40} />
            </ProfileDescriptionField>

            <ProfileDescriptionField>
              <HouseIcon />
              <Skeleton animation="wave" variant="text" width="100%" height={40} />
            </ProfileDescriptionField>
            <Divider>
              <Typography>Описание</Typography>
            </Divider>
            <ProfileDescriptionField>
              <Skeleton animation="wave" variant="text" width="100%" height={70} />
            </ProfileDescriptionField>
            <ProfileDescriptionField></ProfileDescriptionField>
          </ProfileDescriptionContainer>

          <ProfileActionsContainer>
            <Skeleton animation="wave" variant="rectangular" width={200} height={40} />
            <Skeleton animation="wave" variant="rectangular" width={200} height={40} />
          </ProfileActionsContainer>

          <ProfileImagesContainer>
            <ImageList sx={{ width: 1200 }} cols={3}>
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <ImageListItem key={index}>
                  <Skeleton animation="wave" variant="rectangular" width={370} height={550} />
                </ImageListItem>
              ))}
            </ImageList>
          </ProfileImagesContainer>
        </ProfileContainer>
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
            {data.city && (
              <ProfileDescriptionField>
                <HouseIcon />
                {data.city.name}
              </ProfileDescriptionField>
            )}
            <Divider>
              <Typography>Описание</Typography>
            </Divider>
            <ProfileDescriptionField>{data.bio}</ProfileDescriptionField>
            <ProfileDescriptionField></ProfileDescriptionField>
          </ProfileDescriptionContainer>

          <ProfileActionsContainer>
            <LikeDislikeButtons id={id} />
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
              <Carousel
                isOpen={isOpen}
                selectedIndex={selectedImageIndex}
                photos={data.photos}
                setIsOpen={setIsOpen}
              />
            </ImageList>
          </ProfileImagesContainer>
        </ProfileContainer>
      )}
    </div>
  );
};

export default Profile;
