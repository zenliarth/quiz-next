import { useRouter } from 'next/router';
import Button from '../components/Button/index';
import styled from 'styled-components';

const ContainerResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  height: 100vh;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 100px;
`;

const BoxResult = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 200px;
  box-sizing: border-box;
  gap: 10px;
  transition: 0.5s;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    height: 600px;
  }
`;

const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  font-size: 3.5rem;
  box-shadow: 5px 20px 20px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  @media screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 450px) {
    width: 200px;
    height: 200px;
  }
`;

const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  @media screen and (max-width: 450px) {
    font-size: 1.3rem;
  }
`;
const Value = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  transition: 0.5s;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;



export default function Result() {
  const router = useRouter();
  const total = +router.query.total;
  const correctAnswers = +router.query.correctAnswers;
  const percentage = Math.round((correctAnswers / total) * 100);

  return (
    <ContainerResult>
      <Title>Final Result</Title>
      <BoxResult>
        <BoxItem color="#2180b0">
          <Text>Total Questions</Text>
          <Value>{total}</Value>
        </BoxItem>
        <BoxItem color="#1d9132">
          <Text>Correct Answers</Text>
          <Value>{correctAnswers}</Value>
        </BoxItem>
        <BoxItem
          color="
          #e88000
          "
        >
          <Text>Percentage</Text>
          <Value>{percentage}%</Value>
        </BoxItem>
      </BoxResult>
      <Button text="Restart" href="/" />
    </ContainerResult>
  );
}
