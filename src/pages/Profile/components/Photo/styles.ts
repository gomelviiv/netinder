import styled from '@emotion/styled';
import { ImageList, ImageListItem as ImageListItemMaterial } from '@mui/material';

const ProfileImagesContainer = styled.div``;
const ImageListItem = styled(ImageListItemMaterial)`
  background-size: cover;
`;

const ImageListContainer = styled(ImageList)`
  background: white;
  width: 43rem;
  padding: 8px;
  box-shadow: 0px 0px 9px 0px #cacaca;
  border-radius: 5px;
  margin-bottom: 24px;
`;

export { ImageListItem, ProfileImagesContainer, ImageListContainer };
