import { countryRisk } from '@/types/Blue';
import type { NextApiRequest, NextApiResponse } from 'next';

export interface ApiResponse {
  date: string;
  value: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const risk = await fetch(
      `https://api-dolar-argentina.herokuapp.com/api/riesgopais`,
    );
    const data: countryRisk = await risk.json();
    const apiResponse: ApiResponse = {
      date: data.fecha,
      value: data.valor,
    };
    res.status(200).send(apiResponse);
  } catch (err) {
    const error: Error = new Error(`No available`);
    res.status(400).send(error);
  }
}
