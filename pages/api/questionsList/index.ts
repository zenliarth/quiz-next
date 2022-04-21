import questions from './../questionsDatabase';
import { sortArray } from './../../../functions/sortArray';

const QuestionListRoute = (req, res) => {
  const findAll = questions.map((question) => question.id);

  res.status(200).json(sortArray(findAll));
};

export default QuestionListRoute;
