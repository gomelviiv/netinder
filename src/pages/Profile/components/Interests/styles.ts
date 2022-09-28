import styled from '@emotion/styled';
import { Card } from '@mui/material';

const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InterestsCard = styled(Card)`
  margin-right: 12px;
  padding: 4px;
  background: white;
  box-shadow: 0px 0px 9px 0px #cacaca;
`;

export { InterestsCard, InterestsContainer };
