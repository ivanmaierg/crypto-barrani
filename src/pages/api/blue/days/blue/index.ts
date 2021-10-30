import { config } from '@/config/config';
import { historyCurrencyData } from '@/types/Blue';
import type { NextApiRequest, NextApiResponse } from 'next';

async function getCurrencyData(url: string): Promise<historyCurrencyData[]> {
  const latest = await fetch(url);
  return latest.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const allDays = await getCurrencyData(
      `${config.base_url_blue}/evolution.json`,
    );
    res
      .status(200)
      .send(allDays.filter((el) => el.source === `Blue`).reverse());
  } catch (err) {
    const error: Error = new Error(`No available`);
    res.status(400).send(error);
  }
}
