import questions from './../questionsDatabase';
import { sortArray } from './../../../functions/sortArray';

export default function handler (req, res){
  const findAll = questions.map((question) => question.id);

  res.status(200).json(sortArray(findAll));
};


