import { sortArray } from '../functions/sortArray';
import AnswerModel from './answer';

export default class QuestionModel {
  #id: number;
  #text: string;
  #answers: AnswerModel[];
  #isCorrectAnswer: boolean;
  #isAnswered: boolean;

  constructor(
    id: number,
    question: string,
    answers: AnswerModel[],
    isAnswered?: boolean,
    isCorrectAnswer = false,
  ) {
    this.#id = id;
    this.#text = question;
    this.#answers = answers;
    this.#isCorrectAnswer = isCorrectAnswer;
    this.#isAnswered = isAnswered;
  }

  get id(): number {
    return this.#id;
  }

  get text(): string {
    return this.#text;
  }

  get answers(): AnswerModel[] {
    return this.#answers;
  }

  get isCorrectAnswer(): boolean {
    return this.#isCorrectAnswer;
  }

  get isAnswered(): boolean {
    for (const answer of this.#answers) {
      if (answer.answerHasBeenShown) {
        return true;
      }
    }
    return false;
  }

  get notIsAnswered(): boolean {
    return !this.#isAnswered;
  }

  answerQuestionWith(index: number): QuestionModel {
    const isCorrectAnswer = this.#answers[index]?.isCorrect;
    const newAnswers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i;
      const mustShowAnswer = selectedAnswer || answer.isCorrect;
      return mustShowAnswer ? answer.showAnswer() : answer;
    });
    return new QuestionModel(
      this.#id,
      this.#text,
      newAnswers,
      isCorrectAnswer,
      this.#isAnswered,
    );
  }

  sortAnswers(): QuestionModel {
    let sortedAnswers = sortArray(this.#answers);
    return new QuestionModel(
      this.#id,
      this.#text,
      sortedAnswers,
      this.#isCorrectAnswer,
      this.#isAnswered,
    );
  }

  toObject() {
    return {
      id: this.#id,
      text: this.#text,
      answers: this.#answers.map((answer) => answer.toObject()),
      isCorrectAnswer: this.isCorrectAnswer,
      isAnswered: this.isAnswered,
    };
  }
}
