import type { NextApiRequest, NextApiResponse } from 'next';
import { BlueResponse } from '@/types/Blue';

async function getCurrencyData(url: string): Promise<BlueResponse> {
  const latest = await fetch(url);
  return latest.json();
}

export default async function handleBlue(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const latest = await getCurrencyData(
      `https://api.bluelytics.com.ar/v2/latest`,
    );
    const { oficial, blue, oficial_euro, blue_euro, last_update } = latest;

    res.status(200);
    res.send({
      usd: {
        oficial,
        blue,
      },
      eur: {
        oficial: oficial_euro,
        blue: blue_euro,
      },
      lastUpdate: last_update,
    });
  } catch (err: any) {
    const error: Error = new Error(err);
    res.status(400).send(error);
  }
}
