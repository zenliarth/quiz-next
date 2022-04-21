import { useRouter } from 'next/router';
import QuestionText from '../../components/QuestionText';
import {
  BoxResult,
  ContainerResult,
  Title,
  BoxItem,
  Text,
  Value,
} from './style';
import Button from '../../components/Button/index';

function Result() {
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

export default Result;
