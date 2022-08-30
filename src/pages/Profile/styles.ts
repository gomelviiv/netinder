import styled from '@emotion/styled';
import { Avatar, Card, ImageListItem as ImageListItemMaterial, Typography } from '@mui/material';

const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfilePreview = styled(Card)`
  display: flex;
  align-items: center;
  width 100%;
  max-width: 800px;
  background: #ede3e369;
  -webkit-box-shadow: 7px 8px 12px -1px #efeaea;
  -moz-box-shadow: 7px 8px 12px -1px #efeaea;
  box-shadow: 7px 8px 12px -1px #efeaea;
  padding: 12px;
  margin-bottom: 12px;

  .MuiTypography-root {
    margin-left: 24px;
    font-weight: bold;
  }
`;

const ProfileDescriptionContainer = styled(Card)`
  display: flex;
  width 100%;
  max-width: 500px;
  flex-direction: column;
  background: #ede3e369;
  -webkit-box-shadow: 7px 8px 12px -1px #efeaea;
  -moz-box-shadow: 7px 8px 12px -1px #efeaea;
  box-shadow: 7px 8px 12px -1px #efeaea;
  padding: 12px;
  margin-bottom: 12px;

  .MuiTypography-root {
    display: flex;
    align-items: center;
 
  }
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

const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Interests = styled(Card)`
  margin-right: 12px;
  padding: 4px;
  background: #ede3e369;
  -webkit-box-shadow: 7px 8px 12px -1px #efeaea;
  -moz-box-shadow: 7px 8px 12px -1px #efeaea;
  box-shadow: 7px 8px 12px -1px #efeaea;
`;

const ProfileImg = styled(Avatar)``;

const ImageListItem = styled(ImageListItemMaterial)`
  background-size: cover;
`;
const ProfileImagesContainer = styled.div``;

const ProfileImage = styled.div``;

const ProfileActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;

  .MuiButtonBase-root:first-of-type {
    margin-right: 24px;
  }

  .MuiSkeleton-rectangular {
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
  ProfilePreview,
  ProfileImg,
  Interests,
  InterestsContainer,
};
