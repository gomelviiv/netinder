import styled from '@emotion/styled';

const ContainerHome = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .MuiPaper-root {
    margin: 12px;
  }
`;

export { ContainerHome, CardsContainer };
