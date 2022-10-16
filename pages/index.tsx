import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../components/button";
import { Question } from "../components/question";
import { QuestionModel, QuestionModelOutput } from "../model/question";
import styles from "../styles/index.module.css";

const NOT_FOUND = -1;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Home: NextPage = () => {
  const router = useRouter();
  const [questionIds, setQuestionIds] = useState<Array<string>>();
  const [question, setQuestion] = useState<QuestionModel>();

  const nextQuestionIndex = useMemo(() => {
    // Some bizarre error occurrs
    if (!questionIds || !question) return NOT_FOUND;

    // Some unexpected error occurrs and the current question index cannot be found
    const currentQuestionIndex = questionIds.indexOf(`${question.id}`);
    if (currentQuestionIndex === NOT_FOUND) return NOT_FOUND;

    // The current question is the final question
    const nextQuesitonIndex = currentQuestionIndex + 1;
    if (questionIds[nextQuesitonIndex] === undefined) return NOT_FOUND;

    // Found the next question index!
    return nextQuesitonIndex;
  }, [question, questionIds]);

  const nextQuestionExists = nextQuestionIndex !== NOT_FOUND;

  // Could be ref?
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);

  const getQuestion = async (id: number | string) => {
    console.log(id);
    const rawQuestion = await fetch(`${BASE_URL}/questions/${id}`);
    const question: QuestionModelOutput = await rawQuestion.json();
    setQuestion(QuestionModel.fromJSON(question));
  };

  const getQuiz = async () => {
    const data = await fetch(`${BASE_URL}/quizes`);
    const questionIds = await data.json();
    setQuestionIds(questionIds);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  useEffect(() => {
    if (questionIds) {
      getQuestion(questionIds[0]);
    }
  }, [questionIds]);

  const onAnswer = (index: number) => {
    if (!question) return;

    const updatedQuestion = question.answerWith(index);
    setQuestion(updatedQuestion);
    setNumOfCorrectAnswers(
      (numOfCorrectAnswers) =>
        numOfCorrectAnswers + (updatedQuestion.isAnsweredCorrectly ? 1 : 0)
    );
  };

  const onTimeUp = () => {
    setQuestion(question?.answerWith(-1));
  };

  const goToNextStep = async () => {
    // Something very strange and unknown has happened
    if (!questionIds || !question) return;

    // This is the final question and the next step is to show the user the results
    if (!nextQuestionExists) {
      return router.push({
        pathname: "/results",
        query: {
          total: questionIds.length,
          correct: numOfCorrectAnswers,
        },
      });
    }

    // Takes the user to the next question
    return getQuestion(questionIds[nextQuestionIndex]);
  };

  return (
    <div className={styles.container}>
      {!!question && (
        <Question question={question} onAnswer={onAnswer} onTimeUp={onTimeUp} />
      )}
      <Button
        text={nextQuestionExists ? "Next" : "Done"}
        onClick={goToNextStep}
        isDisabled={question?.isOpen}
      />
    </div>
  );
};

export default Home;
