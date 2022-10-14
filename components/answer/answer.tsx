import styles from "./answer.module.css";

type Props = {
  letterValue: string;
  letterBgColor: string;
  onClick: () => void;

  text: string;
  isRevealed: boolean;
  isDisabled: boolean;
  isDimmed: boolean;
  isCorrect: boolean;
};

export const Answer = ({
  letterValue,
  letterBgColor,
  onClick,
  isDisabled,
  isDimmed,
  isCorrect,
  isRevealed,
  text,
}: Props) => {
  const greeting = isCorrect
    ? "Excellent! The correct answer is..."
    : "Oops! The correct answer is...";

  return (
    <div
      className={[
        styles.container,
        isDisabled ? styles.isDisabled : "",
        isDimmed ? styles.isDimmed : "",
      ].join(" ")}
      onClick={onClick}
      aria-disabled={isDisabled}
    >
      <div className={styles.content}>
        {!isRevealed ? (
          <div className={styles.front}>
            <div
              className={styles.letter}
              style={{ backgroundColor: letterBgColor }}
            >
              {letterValue}
            </div>
            <div className={styles.text}>{text}</div>
          </div>
        ) : (
          <div className={styles.back}>
            <div className={isCorrect ? styles.correct : styles.incorrect}>
              <div>{greeting}</div>
              <div className={styles.value}>{text}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
