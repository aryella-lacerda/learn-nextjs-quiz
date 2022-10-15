import styles from "../styles/results.module.css";
import { useRouter } from "next/router";
import { Statistic } from "../components/statistic";
import { Button } from "../components/button";

const Results = () => {
  const router = useRouter();

  const total = +(router.query?.total || "");
  const correct = +(router.query?.correct || "");
  const percentage = ((correct / total) * 100).toFixed(1);

  return (
    <div className={styles.container}>
      <h1>Final Results</h1>
      <div className={styles.results}>
        <Statistic value={total} label={"Questions"} bgColor={"#FDD60F"} />
        <Statistic value={correct} label={"Correct"} bgColor={"#DE6A33"} />
        <Statistic
          value={`${percentage}%`}
          label={"Percentage"}
          bgColor={"#9CD2A4"}
        />
      </div>
      <Button href="/" text="Try Again" />
    </div>
  );
};

export default Results;
