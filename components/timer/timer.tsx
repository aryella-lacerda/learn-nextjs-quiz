import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./timer.module.css";

type Props = {
  isPlaying: boolean;
  onComplete: () => void;
};

export const Timer = ({ isPlaying, onComplete }: Props) => {
  return (
    <div className={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        onComplete={onComplete}
        size={120}
        duration={10}
        // colors={["#BCE596", "#F7B801", "#ED827A", "#ED827A"]}
        colors={["#2baa6d", "#F7B801", "#e44a4c", "#e44a4c"]}
        colorsTime={[10, 6.66, 3.33, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};
