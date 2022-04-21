import { useState } from 'react';
import Button from '../components/Button';
import Question from '../components/Question/index';
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question';
import { Container } from './style';

const questionMock = new QuestionModel(1, 'What is the best language?', [
  AnswerModel.isRightAnswer('Javascript'),
  AnswerModel.isWrongAnswer('PHP'),
  AnswerModel.isWrongAnswer('Java'),
  AnswerModel.isWrongAnswer('C#'),
]);

export default function Home() {
  const [question, setQuestion] = useState(questionMock);

  // using ref to get question current
  /* const questionRef = useRef<QuestionModel>();

  useEffect(() => {
    questionRef.current = question;
  }, [question]); */

  /* function timeout(){
    if(questionRef.current.notIsAnswered){
      setQuestion(questionRef.current.answerQuestionWith(-1));
    }
  } */

  function onAnswerResponse(index: number) {
    setQuestion(question.answerQuestionWith(index));
  }

  function timeout() {
    if (question.notIsAnswered) {
      setQuestion(question.answerQuestionWith(-1));
    }
  }

  return (
    <Container>
      <Question
        value={question}
        timeToAnswer={5}
        onAnswerResponse={onAnswerResponse}
        timeout={timeout}
      />
      <Button text="Next"/>
    </Container>
  );
}
