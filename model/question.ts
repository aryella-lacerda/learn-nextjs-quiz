import { shuffle } from "../utils/array/shuffle";
import { AnswerModel } from "./answer";

type InputProps = {
  id: number;
  question: string;
  answers: AnswerModel[];
  wasAnsweredCorrectly?: boolean;
  wasAnswered?: boolean;
};

type OutputProps = {
  id: number;
  question: string;
  answers: AnswerModel[];
  wasAnsweredCorrectly: boolean;
  wasAnswered: boolean;
};

export class QuestionModel {
  #id: number;
  #question: string;
  #answers: AnswerModel[];
  #wasAnsweredCorrectly: boolean;
  #wasAnswered: boolean;

  constructor(props: InputProps) {
    this.#id = props.id;
    this.#answers = props.answers;
    this.#question = props.question;

    this.#wasAnswered = props.wasAnswered || false;
    this.#wasAnsweredCorrectly = props.wasAnsweredCorrectly || false;
  }

  answerWith(index: number): QuestionModel {
    const wasAnswered = true;
    const wasAnsweredCorrectly = this.#answers[index]?.isCorrect;

    const answers = this.#answers.map((answer, i) => {
      const isUsersAnswer = i === index;
      const isCorrectAnswer = answer.isCorrect;
      return isUsersAnswer || isCorrectAnswer ? answer.reveal() : answer;
    });

    return new QuestionModel({
      ...this.toJSON(),
      wasAnswered,
      wasAnsweredCorrectly,
      answers,
    });
  }

  shuffleAnswers(): QuestionModel {
    const shuffledAnswers = shuffle(this.#answers);
    return new QuestionModel({ ...this.toJSON(), answers: shuffledAnswers });
  }

  get isAnswered(): boolean {
    for (let answer of this.#answers) {
      if (answer.isRevealed) return true;
    }

    return false;
  }

  toJSON(): OutputProps {
    return {
      id: this.#id,
      question: this.#question,
      wasAnswered: this.#wasAnswered,
      wasAnsweredCorrectly: this.#wasAnsweredCorrectly,
      answers: this.#answers,
    };
  }
}
