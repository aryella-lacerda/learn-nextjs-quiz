type InputProps = {
  value: string;
  isCorrect?: boolean;
  isRevealed?: boolean;
};

type OutputProps = {
  value: string;
  isCorrect: boolean;
  isRevealed: boolean;
};

export class AnswerModel {
  #value: string;
  #isCorrect: boolean;
  #isRevealed: boolean; // ui state?

  constructor(props: InputProps) {
    this.#value = props.value;
    this.#isCorrect = props.isCorrect || false;
    this.#isRevealed = props.isRevealed || false;
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

  get isRevealed() {
    return this.#isRevealed;
  }

  get value() {
    return this.#value;
  }

  reveal(): AnswerModel {
    return new AnswerModel({ ...this.toJSON(), isRevealed: true });
  }

  toJSON(): OutputProps {
    return {
      value: this.#value,
      isCorrect: this.#isCorrect,
      isRevealed: this.#isRevealed,
    };
  }
}
