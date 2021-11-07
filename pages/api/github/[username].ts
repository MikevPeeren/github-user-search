// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.query;

  const response = await fetch(`https://api.github.com/users/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  });

  const data = await response.json();

  res.status(200).json(data);
}
