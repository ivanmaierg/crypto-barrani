import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const risk = await fetch(
      `https://api-dolar-argentina.herokuapp.com/api/riesgopais`,
    );
    res.status(200).send(await risk.json());
  } catch (err) {
    const error: Error = new Error(`No available`);
    res.status(400).send(error);
  }
}
