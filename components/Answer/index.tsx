import AnswerModel from '../../model/answer';
import {
  Container,
  ContentAnswer,
  CardFront,
  Letter,
  AnswerText,
  CardBack,
  CorrectAnswer,
  Title,
  IncorrectAnswer,
  Text,
} from './styles';

interface AnswerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  backgroundColor: string;
  onAnswerResponse: (index: number) => void;
}

function Answer({
  value,
  index,
  letter,
  backgroundColor,
  onAnswerResponse,
}: AnswerProps) {

  return (
    <Container>
      <ContentAnswer onClick={() => onAnswerResponse(index)}>
        {!value.answerHasBeenShown ? (
          <CardFront>
            <Letter
              style={{
                backgroundColor: backgroundColor,
              }}
            >
              {letter}
            </Letter>
            <AnswerText>{value.value}</AnswerText>
          </CardFront>
        ) : (
          <CardBack>
            {value.isCorrect ? (
              <CorrectAnswer>
                <Title>The correct answer is...</Title>
                <Text>{value.value}</Text>
              </CorrectAnswer>
            ) : (
              <IncorrectAnswer>
                <Title>This answer is incorrect...</Title>
                <Text>{value.value}</Text>
              </IncorrectAnswer>
            )}
          </CardBack>
        )}
      </ContentAnswer>
    </Container>
  );
}

export default Answer;
