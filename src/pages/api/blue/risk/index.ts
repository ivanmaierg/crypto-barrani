import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    let risk = await fetch(
      `https://api-dolar-argentina.herokuapp.com/api/riesgopais`,
    );
    risk = await risk.json();
    risk = {
      date: risk.fecha,
      value: risk.valor,
    };
    res.status(200).send(risk);
  } catch (err) {
    const error: Error = new Error(`No available`);
    res.status(400).send(error);
  }
}
