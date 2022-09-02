import React, { FC, memo } from 'react';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HouseIcon from '@mui/icons-material/House';
import SchoolIcon from '@mui/icons-material/School';
import { Divider, ImageList, Skeleton as SkeletonMaterial, Typography } from '@mui/material';

import {
  ImageListItem,
  ProfileActionsContainer,
  ProfileContainer,
  ProfileDescriptionContainer,
  ProfileDescriptionField,
  ProfileImagesContainer,
} from './styles';

const Skeleton: FC = () => {
  return (
    <ProfileContainer>
      <ProfileDescriptionContainer>
        <Divider>
          <Typography>Общая информация</Typography>
        </Divider>
        <ProfileDescriptionField>
          <SkeletonMaterial animation="wave" variant="text" width="100%" height={40} />
        </ProfileDescriptionField>

        <ProfileDescriptionField>
          <HomeRepairServiceIcon />
          <SkeletonMaterial animation="wave" variant="text" width="100%" height={40} />
        </ProfileDescriptionField>

        <ProfileDescriptionField>
          <SchoolIcon />
          <SkeletonMaterial animation="wave" variant="text" width="100%" height={40} />
        </ProfileDescriptionField>

        <ProfileDescriptionField>
          <HouseIcon />
          <SkeletonMaterial animation="wave" variant="text" width="100%" height={40} />
        </ProfileDescriptionField>
        <Divider>
          <Typography>Описание</Typography>
        </Divider>
        <ProfileDescriptionField>
          <SkeletonMaterial animation="wave" variant="text" width="100%" height={70} />
        </ProfileDescriptionField>
        <ProfileDescriptionField></ProfileDescriptionField>
      </ProfileDescriptionContainer>

      <ProfileActionsContainer>
        <SkeletonMaterial animation="wave" variant="rectangular" width={200} height={40} />
        <SkeletonMaterial animation="wave" variant="rectangular" width={200} height={40} />
      </ProfileActionsContainer>

      <ProfileImagesContainer>
        <ImageList sx={{ width: 1200 }} cols={3}>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <ImageListItem key={index}>
              <SkeletonMaterial animation="wave" variant="rectangular" width={370} height={550} />
            </ImageListItem>
          ))}
        </ImageList>
      </ProfileImagesContainer>
    </ProfileContainer>
  );
};

export default memo(Skeleton);
