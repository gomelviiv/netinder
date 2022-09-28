import styled from '@emotion/styled';

const DivLogo = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  font-size: 24px;
  height: 100vh;
  background-repeat: no-repeat;
  background: linear-gradient(
      149deg,
      rgb(19, 133, 112) 0%,
      rgb(160 57 167) 100%,
      rgb(108 15 145) 100%,
      rgb(239 8 125) 400%
    )
    100% 100% / 200% no-repeat;
  animation: 1s linear 20s normal none running gradient;
  background-repeat: no-repeat;
  background-size: 200%;

  @keyframes gradient {
    0% {
      background-position: 80% 0%;
    }
    50% {
      background-position: 20% 100%;
    }
    100% {
      background-position: 80% 0%;
    }
  }
`;

export { DivLogo };
