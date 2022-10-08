import { QuestionModel } from "../../model/question";
import { Answer } from "../answer/answer";
import { Text } from "../text/text";
import styles from "./question.module.css";

const letters = [
  {
    value: "A",
    color: "#FFBF00",
  },
  {
    value: "B",
    color: "#f266ba",
  },
  {
    value: "C",
    color: "#85d4f2",
  },
  {
    value: "D",
    color: "#A4C639",
  },
];

type Props = {
  question: QuestionModel;
  onAnswer: (index: number) => void;
};

export const Question = ({ question, onAnswer }: Props) => {
  console.log(question.isAnswered);

  return (
    <div className={styles.container}>
      <Text>{question.text}</Text>
      {question.answers.map((answer, i) => (
        <Answer
          key={i}
          answer={answer}
          letter={letters[i].value}
          bgColor={letters[i].color}
          isDisabled={question.isAnswered}
          onClick={() => {
            onAnswer(i);
          }}
        />
      ))}
    </div>
  );
};
