// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { shuffle } from "../../../utils/array/shuffle";
import { questions } from "../database";

type Data = any;

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(shuffle(Object.keys(questions)));
}
