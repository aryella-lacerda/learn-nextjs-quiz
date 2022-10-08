import type { NextPage } from "next";
import { useState } from "react";
import { Question } from "../components/question";
import styles from "../styles/index.module.css";
import { questions } from "./api/database";

const Home: NextPage = () => {
  const [question, setQuestion] = useState(questions[100]);

  const onAnswer = (index: number) => {
    console.log(index);
    setQuestion(question.answerWith(index));
  };

  return (
    <div className={styles.container}>
      <Question question={question} onAnswer={onAnswer} />
    </div>
  );
};

export default Home;
