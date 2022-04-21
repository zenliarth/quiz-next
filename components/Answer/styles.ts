import styled, { keyframes } from 'styled-components';

// make keyframe to rotate div
const rotate = keyframes`
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const ContentAnswer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 80%;
`;
export const CardFront = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  width: 100%;
  min-width: 400px;
  height: 100%;
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  padding: 10px;
  gap: 1rem;
  margin: 5px 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
  }
`;
export const Letter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
`;
export const AnswerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const CardBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 400px;
  height: 100%;
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  gap: 1rem;
  margin: 5px 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  transition: 0.3s;
  cursor: pointer;
  position: absolute;
  animation: ${rotate} 0.5s linear;
  perspective: 1000px;
  &:hover {
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
  }
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #fff;
`;

export const Text = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;
export const CorrectAnswer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: #00b058;
  border-radius: 10px;
  height: 100%;
  animation: ${rotate} 0.5s linear;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;
export const IncorrectAnswer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: crimson;
  border-radius: 10px;
  height: 100%;
  animation: ${rotate} 0.5s linear;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000px ;
`;
