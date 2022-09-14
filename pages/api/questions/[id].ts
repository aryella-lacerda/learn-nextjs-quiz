// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { QuestionModel } from "../../../model/question";
import { questions } from "../database";

type Data = QuestionModel | undefined;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = Number(req.query.id);
  const response = questions[id]?.shuffleAnswers();
  const testing = response?.answerWith(0);

  if (response) res.status(200).json(testing);
  else res.status(204).send(undefined);
}
