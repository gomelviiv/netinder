import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HouseIcon from '@mui/icons-material/House';
import SchoolIcon from '@mui/icons-material/School';
import { Divider, ImageList, ImageListItem, Typography } from '@mui/material';
import { useAppSelector } from '@redux/hooks';
import { useGetMatchByIdQuery } from '@redux/matches/matches.api';

import {
  ProfileContainer,
  ProfileDescriptionContainer,
  ProfileDescriptionField,
  ProfileImagesContainer,
} from './styles';

const Profile: FC = () => {
  const { id } = useParams();
  const login = useAppSelector((data) => data.login);
  const { data, isLoading } = useGetMatchByIdQuery({ id, token: login.token });

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
            <ProfileDescriptionField>
              <HomeRepairServiceIcon />
              {data.jobs}
            </ProfileDescriptionField>
            <ProfileDescriptionField>
              <SchoolIcon />
              {`${data.schools}`}
            </ProfileDescriptionField>
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
          <ProfileImagesContainer>
            <ImageList sx={{ width: 500 }} cols={3} rowHeight={164}>
              {data.photos?.map((photo) => (
                <ImageListItem key={photo.id}>
                  <img
                    src={`${photo.url}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${photo.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={photo.fileName}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </ProfileImagesContainer>
        </ProfileContainer>
      )}
    </div>
  );
};

export default Profile;
