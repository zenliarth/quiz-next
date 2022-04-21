export default class AnswerModel {
  #value: string;
  #isCorrect: boolean;
  #answerHasBeenShown: boolean;

  constructor(value: string, isCorrect: boolean, answerHasBeenShown = false) {
    this.#value = value;
    this.#isCorrect = isCorrect;
    this.#answerHasBeenShown = answerHasBeenShown;
  }

  static isRightAnswer(value: string) {
    return new AnswerModel(value, true);
  }

  static isWrongAnswer(value: string) {
    return new AnswerModel(value, false);
  }

  get value(): string {
    return this.#value;
  }

  get isCorrect(): boolean {
    return this.#isCorrect;
  }

  get answerHasBeenShown(): boolean {
    return this.#answerHasBeenShown;
  }

  showAnswer() {
    return new AnswerModel(this.#value, this.#isCorrect, true);
  }

  toObject() {
    return {
      value: this.#value,
      isCorrect: this.#isCorrect,
      answerHasBeenShown: this.#answerHasBeenShown,
    };
  }
}
