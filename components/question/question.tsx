import { QuestionModel } from "../../model/question";
import { Answer } from "../answer/answer";
import { Text } from "../text/text";
import { Timer } from "../timer";
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
  onTimeUp: () => void;
};

export const Question = ({ question, onAnswer, onTimeUp }: Props) => {
  return (
    <div className={styles.container}>
      <Text>{question.text}</Text>
      <Timer isPlaying={question.isOpen} onComplete={onTimeUp} />
      {question.answers.map((answer, i) => (
        <Answer
          key={i}
          letterValue={letters[i].value}
          letterBgColor={letters[i].color}
          text={answer.value}
          isDisabled={question.isClosed}
          isRevealed={question.isClosed && answer.isCorrect}
          isDimmed={question.isClosed && !answer.isChosen && !answer.isCorrect}
          isCorrect={question.isAnsweredCorrectly}
          onClick={() => {
            onAnswer(i);
          }}
        />
      ))}
    </div>
  );
};
