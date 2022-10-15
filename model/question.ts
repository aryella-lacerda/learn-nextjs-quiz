import { shuffle } from "../utils/array/shuffle";
import { AnswerModel, AnswerModelOutput } from "./answer";

type QuestionModelInput = {
  id: number;
  text: string;
  answers: AnswerModel[];
  isAnsweredCorrectly?: boolean;
  isClosed?: boolean;
  isTimedOut?: boolean;
};

export type QuestionModelOutput = {
  id: number;
  text: string;
  answers: AnswerModelOutput[];
  isAnsweredCorrectly: boolean;
  isClosed: boolean;
  isTimedOut: boolean;
};

export class QuestionModel {
  #id: number;
  #text: string;
  #answers: AnswerModel[];

  // Is the question closed for answers?
  #isClosed: boolean;

  // Did the timer run out?
  #isTimedOut: boolean;

  // If the user answered, was it correct? If the timer ran out, defaults to false.
  #isAnsweredCorrectly: boolean;

  constructor(props: QuestionModelInput) {
    this.#id = props.id;
    this.#answers = props.answers;
    this.#text = props.text;

    this.#isClosed = props.isClosed || false;
    this.#isTimedOut = props.isTimedOut || false;
    this.#isAnsweredCorrectly = props.isAnsweredCorrectly || false;
  }

  answerWith(index: number): QuestionModel {
    const isTimedOut = index === -1;
    const isClosed = true;

    const isAnsweredCorrectly = this.#answers[index]?.isCorrect || false;

    const answers = this.#answers.map((answer, i) => {
      const isUsersAnswer = i === index;
      return isUsersAnswer ? answer.choose() : answer;
    });

    return new QuestionModel({
      ...this.toJSON(),
      isClosed,
      isTimedOut,
      isAnsweredCorrectly,
      answers,
    });
  }

  shuffleAnswers(): QuestionModel {
    const shuffledAnswers = shuffle(this.#answers);
    return new QuestionModel({ ...this.toJSON(), answers: shuffledAnswers });
  }

  get id(): number {
    return this.#id;
  }

  get isAnsweredCorrectly(): boolean {
    return this.#isAnsweredCorrectly;
  }

  get isTimedOut(): boolean {
    return this.#isTimedOut;
  }

  get isClosed(): boolean {
    return this.#isClosed;
  }

  get isOpen(): boolean {
    return !this.#isClosed;
  }

  get text(): string {
    return this.#text;
  }

  get answers() {
    return this.#answers;
  }

  static fromJSON(question: QuestionModelOutput): QuestionModel {
    const answers = question.answers.map((answer) => new AnswerModel(answer));
    return new QuestionModel({
      ...question,
      answers,
    });
  }

  toJSON(): QuestionModelOutput {
    return {
      id: this.#id,
      text: this.#text,
      isClosed: this.#isClosed,
      isAnsweredCorrectly: this.#isAnsweredCorrectly,
      answers: this.#answers.map((answer) => answer.toJSON()),
      isTimedOut: this.#isTimedOut,
    };
  }
}
