import AnswerModel from '../../model/answer';
import QuestionModel from '../../model/question';

const questions: QuestionModel[] = [
  new QuestionModel(101, 'What is the capital of japan?', [
    AnswerModel.isRightAnswer('Tokyo'),
    AnswerModel.isWrongAnswer('Osaka'),
    AnswerModel.isWrongAnswer('Kyoto'),
    AnswerModel.isWrongAnswer('Hokkaido'),
  ]),
  new QuestionModel(202, 'What is the capital of France?', [
    AnswerModel.isRightAnswer('Paris'),
    AnswerModel.isWrongAnswer('Rome'),
    AnswerModel.isWrongAnswer('London'),
    AnswerModel.isWrongAnswer('Berlin'),
  ]),
  new QuestionModel(
    303,
    'What is the capital of Germany?',
    [
      AnswerModel.isRightAnswer('Berlin'),
      AnswerModel.isWrongAnswer('Paris'),
      AnswerModel.isWrongAnswer('London'),
      AnswerModel.isWrongAnswer('Rome'),
    ],
  ),
  new QuestionModel(404, 'What is the capital of Italy?', [
    AnswerModel.isRightAnswer('Rome'),
    AnswerModel.isWrongAnswer('Paris'),
    AnswerModel.isWrongAnswer('London'),
    AnswerModel.isWrongAnswer('Berlin'),
  ]),
  new QuestionModel(505, 'What is the capital of Spain?', [
    AnswerModel.isRightAnswer('Madrid'),
    AnswerModel.isWrongAnswer('Paris'),
    AnswerModel.isWrongAnswer('London'),
    AnswerModel.isWrongAnswer('Berlin'),
  ]),
];

export default questions;
