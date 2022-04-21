import QuestionModel from '../../model/question';
import QuestionText from '../QuestionText';

import { Container } from './styles';
import Answer from './../Answer/index';
import Timer from '../Timer';

const letters = [
  { letter: 'A', color: '#F2C866' },
  { letter: 'B', color: '#F266BA' },
  { letter: 'C', color: '#85D4F2' },
  { letter: 'D', color: '#BCE596' },
];

interface QuestionProps {
  value: QuestionModel;
  timeToAnswer?: number;
  onAnswerResponse: (index: number) => void;
  timeout: () => void;
}

function Question({
  value,
  timeout,
  timeToAnswer,
  onAnswerResponse,
}: QuestionProps) {
  const renderAnswers = () => {
    return value.answers.map((answer, i) => (
      <Answer
        key={i}
        value={answer}
        index={i}
        letter={letters[i].letter}
        backgroundColor={letters[i].color}
        onAnswerResponse={onAnswerResponse}
      />
    ));
  };

  return (
    <Container>
      <QuestionText text={value.text} />
      <Timer duration={timeToAnswer ?? 10} timeout={timeout} />
      {renderAnswers()}
    </Container>
  );
}

export default Question;
