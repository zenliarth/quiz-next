import { useEffect, useState } from 'react';
import QuestionModel from '../model/question';
import QuestionList from './../components/QuestionList/index';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100% ;
  max-width: 600px;
  margin: 0 auto;
`;

export default function Home() {
  const router = useRouter();

  const [questionIds, setQuestionIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  async function getQuestionIds() {
    const response = await fetch(`/api/questionsList`);
    const ids = await response.json();
    setQuestionIds(ids);
  }

  async function getQuestion(questionId: number) {
    const response = await fetch(`/api/questions/${questionId}`);
    const json = await response.json();
    const newQuestion = QuestionModel.createObjectFrom(json);
    setQuestion(newQuestion);
  }

  function answeredQuestion(answeredQuestion: QuestionModel) {
    setQuestion(answeredQuestion);
    const correct = answeredQuestion.isCorrectAnswer;
    setCorrectAnswers(correctAnswers + (correct ? 1 : 0));
  }

  function nextQuestionID() {
    if (question) {
      const nextQuestionId = questionIds[questionIds.indexOf(question.id) + 1];
      return nextQuestionId;
    }
  }

  function goToNextStep() {
    const nextQuestion = nextQuestionID();
    if (nextQuestion) {
      goToNextQuestion(nextQuestion);
    } else {
      goToResult();
    }
  }

  function goToNextQuestion(questionId: number) {
    getQuestion(questionId);
  }

  function goToResult() {
    router.push({
      pathname: '/result',
      query: {
        total: questionIds.length,
        correctAnswers,
      },
    });
  }

  useEffect(() => {
    getQuestionIds();
  }, []);

  useEffect(() => {
    if (questionIds.length > 0) {
      getQuestion(questionIds[0]);
    }
  }, [questionIds]);

  return (
    <Container>
      <QuestionList
        question={question}
        lastQuestion={nextQuestionID() === undefined}
        answeredQuestion={answeredQuestion}
        nextStep={goToNextStep}
      />
    </Container>
  );
}
