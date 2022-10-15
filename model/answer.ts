type AnswerModelInput = {
  value: string;
  isCorrect?: boolean;
  isChosen?: boolean;
};

export type AnswerModelOutput = {
  value: string;
  isCorrect: boolean;
  isChosen: boolean;
};

export class AnswerModel {
  #value: string;
  #isCorrect: boolean;
  #isChosen: boolean;

  constructor(props: AnswerModelInput) {
    this.#value = props.value;
    this.#isCorrect = props.isCorrect || false;
    this.#isChosen = props.isChosen || false;
  }

  static correct(value: string) {
    return new AnswerModel({ value, isCorrect: true });
  }

  static incorrect(value: string) {
    return new AnswerModel({ value, isCorrect: false });
  }

  get isCorrect() {
    return this.#isCorrect;
  }

  get isChosen() {
    return this.#isChosen;
  }

  get value() {
    return this.#value;
  }

  choose(): AnswerModel {
    return new AnswerModel({ ...this.toJSON(), isChosen: true });
  }

  toJSON(): AnswerModelOutput {
    return {
      value: this.#value,
      isCorrect: this.#isCorrect,
      isChosen: this.#isChosen,
    };
  }
}
