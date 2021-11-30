import { config } from '@/config/config';

import type { NextApiRequest, NextApiResponse } from 'next';

const options = {
  method: `GET`,
  headers: {
    'x-rapidapi-host': `${config.host1}`,
    'x-rapidapi-key': `${config.apiKey1}`,
  },
};
async function getData(url: string): Promise<any[]> {
  const data = await fetch(url, options);
  return data.json();
}

const mapCoins = (coins: any[]) =>
  coins.map((coin) => {
    const { id, uuid, rank, marketCap, volume, circulatingSupply, change } =
      coin;
    return { id, uuid, rank, marketCap, volume, circulatingSupply, change };
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const coinsList = await getData(`${config.base_url_coinranking}/coins`);

    res.status(200).send(coinsList);
  } catch (err) {
    const error: Error = new Error(`No available`);
    res.status(400).send(error);
  }
}
