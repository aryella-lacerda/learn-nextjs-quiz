// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { QuestionModelOutput } from "../../../model/question";
import { questions } from "../database";

type Data = QuestionModelOutput | undefined;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = Number(req.query.id);
  const response = questions[id]?.shuffleAnswers();

  if (response) res.status(200).json(response);
  else res.status(204).send(undefined);
}
