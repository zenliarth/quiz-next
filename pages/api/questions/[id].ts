import questions from '../questionsDatabase';

const questionsRoute = (req, res) => {
  const id = +req.query.id;

  const filterQuestion = questions.filter((question) => question.id === id);

  if (filterQuestion.length === 0) {
    res.status(404).json({ message: 'Question not found' });
  } else {
    const selectedQuestion = filterQuestion[0].sortAnswers();
    res.status(200).json(selectedQuestion.toObject());
  }
};

export default questionsRoute;
