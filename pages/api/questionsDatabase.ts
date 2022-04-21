import AnswerModel from '../../model/answer';
import QuestionModel from '../../model/question';

const questions: QuestionModel[] = [
  new QuestionModel(
    1,
    'Which hook is used to update state in a functional component?',
    [
      AnswerModel.isRightAnswer('useState'),
      AnswerModel.isWrongAnswer('useEffect'),
      AnswerModel.isWrongAnswer('useContext'),
      AnswerModel.isWrongAnswer('useReducer'),
    ],
  ),
  new QuestionModel(2, 'Which hook is used to share state between components?', [
    AnswerModel.isWrongAnswer('useState'),
    AnswerModel.isRightAnswer('useContext'),
    AnswerModel.isWrongAnswer('useEffect'),
    AnswerModel.isWrongAnswer('useReducer'),
  ]),
  new QuestionModel(3, 'Which hook helps async functions to get data from an API?', [
    AnswerModel.isWrongAnswer('useState'),
    AnswerModel.isWrongAnswer('useContext'),
    AnswerModel.isRightAnswer('useEffect'),
    AnswerModel.isWrongAnswer('useReducer'),
  ]),
  new QuestionModel(
    4,
    'Which hook is used to manage state in a class component?',
    [
      AnswerModel.isWrongAnswer('useState'),
      AnswerModel.isWrongAnswer('useContext'),
      AnswerModel.isWrongAnswer('useEffect'),
      AnswerModel.isRightAnswer('useReducer'),
    ],
  ),
  new QuestionModel(5, 'Which hook prevents the component from being re-rendered after another part is modified?', [
    AnswerModel.isWrongAnswer('useState'),
    AnswerModel.isWrongAnswer('useContext'),
    AnswerModel.isWrongAnswer('useEffect'),
    AnswerModel.isRightAnswer('useMemo'),
  ]),
  new QuestionModel(6, 'Which hook is used to memoize a function?', [
    AnswerModel.isWrongAnswer('useState'),
    AnswerModel.isWrongAnswer('useMemo'),
    AnswerModel.isWrongAnswer('useEffect'),
    AnswerModel.isRightAnswer('useCallback'),
  ]),
  new QuestionModel(7, 'Which hook can be used to store values that can be changed at any time without the component being re-rendered?', [
    AnswerModel.isWrongAnswer('useState'),
    AnswerModel.isWrongAnswer('useCallback'),
    AnswerModel.isWrongAnswer('useMemo'),
    AnswerModel.isRightAnswer('useRef'),
  ]),
];

export default questions;
