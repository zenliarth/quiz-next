import styled, { keyframes } from 'styled-components';

const InfiniteRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(75, 9, 198);
  background: linear-gradient(
    100deg,
    rgba(75, 9, 198, 1) 0%,
    rgba(144, 8, 255, 1) 100%
  );
`;

export const Spinner = styled.span`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-right: 2px solid #fff;
  animation: ${InfiniteRotate} 1s linear infinite;
`;
