import styled from '@emotion/styled';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';

const ErroDialog = styled(Dialog)`
  // position: absolute !important;
  // right: 0 !important;
  // top: 0 !important;
  // left: auto !important;
  // bottom: auto !important;
  // margin-right: 24px;
  // margin-top: 24px;
  // max-width: 315px;
  // z-index: 1000;
`;

const AlertContainer = styled(Alert)``;

export { AlertContainer, ErroDialog };
