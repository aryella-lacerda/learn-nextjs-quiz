import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Question } from "../components/question";
import styles from "../styles/index.module.css";
import { questions } from "./api/database";

const Home: NextPage = () => {
  const [question, setQuestion] = useState(questions[100]);

  const onAnswer = (index: number) => {
    setQuestion(question.answerWith(index));
  };

  const onTimeUp = () => {
    setQuestion(question.answerWith(-1));
  };

  useEffect(() => {
    console.log(question.toJSON());
  }, [question]);

  return (
    <div className={styles.container}>
      <Question question={question} onAnswer={onAnswer} onTimeUp={onTimeUp} />
    </div>
  );
};

export default Home;
