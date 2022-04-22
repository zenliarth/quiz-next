import QuestionModel from '../../model/question';
import Button from '../Button';
import Loading from '../Loading';
import Question from '../Question';
import { Container } from './styles';

interface QuestionListProps {
  question: QuestionModel;
  lastQuestion: boolean;
  answeredQuestion: (question: QuestionModel) => void;
  nextStep: () => void;
}

function QuestionList({
  question,
  lastQuestion,
  answeredQuestion,
  nextStep,
}: QuestionListProps) {
  function onAnswerResponse(index: number) {
    if (question.notIsAnswered) {
      answeredQuestion(question.answerQuestionWith(index));
    }
  }

  return (
    <Container>
      {question ? (
        <>
          <Question
            value={question}
            timeToAnswer={10}
            onAnswerResponse={onAnswerResponse}
            timeout={nextStep}
          />
          <Button
            onClick={nextStep}
            text={lastQuestion ? 'Finalizar' : 'Next'}
          />
        </>
      ) : (
        <Loading isLoading={question ? false : true} />
      )}
    </Container>
  );
}

export default QuestionList;
