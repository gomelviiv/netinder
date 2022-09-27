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
    rgb(96, 52, 158) 42%,
    rgb(145, 15, 114) 72%,
    rgb(87, 37, 102) 100%
  );
  animation: gradient 20s infinite linear;
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
