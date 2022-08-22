import styled from '@emotion/styled';
import { Card, ImageListItem as ImageListItemMaterial, Typography } from '@mui/material';

const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileDescriptionContainer = styled(Card)`
  display: flex;
  max-width: 500px;
  flex-direction: column;
`;

const ProfileDescriptionField = styled(Typography)`
  padding: 4px 12px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .MuiSvgIcon-root {
    margin-right: 8px;
  }
`;
const ImageListItem = styled(ImageListItemMaterial)`
  background-size: cover;
`;
const ProfileImagesContainer = styled.div``;

const ProfileImage = styled.div``;

const ProfileActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;

  .MuiButtonBase-root:first-child {
    margin-right: 24px;
  }
`;

export {
  ProfileContainer,
  ImageListItem,
  ProfileDescriptionContainer,
  ProfileDescriptionField,
  ProfileImagesContainer,
  ProfileImage,
  ProfileActionsContainer,
};
