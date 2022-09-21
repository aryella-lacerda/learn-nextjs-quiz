import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import { questions } from "./api/database";

const Home: NextPage = () => {
  const question = questions[100];
  return (
    <div className={styles.container}>
      <h1>{question.text}</h1>
    </div>
  );
};

export default Home;
