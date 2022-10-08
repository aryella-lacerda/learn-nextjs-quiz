import { AnswerModel } from "../../model/answer";
import styles from "./answer.module.css";

type Props = {
  answer: AnswerModel;
  letter: string;
  bgColor: string;
  onClick: () => void;
  isDisabled: boolean;
};

// when question is answered (isDisabled === true)
// disable all responses
// dim responses that are not revealed

export const Answer = ({
  answer,
  letter,
  bgColor,
  onClick,
  isDisabled,
}: Props) => {
  return (
    <div
      className={[
        styles.container,
        isDisabled ? styles.isDisabled : "",
        isDisabled && !answer.isRevealed ? styles.isDimmed : "",
      ].join(" ")}
      onClick={onClick}
      aria-disabled={isDisabled}
    >
      <div className={styles.content}>
        {!answer.isRevealed ? (
          <div className={styles.front}>
            <div className={styles.letter} style={{ backgroundColor: bgColor }}>
              {letter}
            </div>
            <div className={styles.text}>{answer.value}</div>
          </div>
        ) : (
          <div className={styles.back}>
            {answer.isCorrect ? (
              <div className={styles.correct}>
                <div>Excellent! The correct answer is...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            ) : (
              <div className={styles.incorrect}>
                <div>Oops! This answer is incorrect...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
