import { BlueData, CountryRisk, HistoryCurrencyData } from '@/types/Blue';

export async function getLatestBlue(): Promise<BlueData> {
  const latest = await fetch(`api/blue`);
  if (!latest.ok) {
    const error: any = new Error(`An error occurred while fetching the data.`);
    // Attach extra info to the error object.
    error.info = await latest.json();
    error.status = latest.status;
    throw error;
  }
  return latest.json();
}

export async function getRisk(): Promise<CountryRisk> {
  const latest = await fetch(`api/blue/risk`);
  if (!latest.ok) {
    const error: any = new Error(`An error occurred while fetching the data.`);
    // Attach extra info to the error object.
    error.info = await latest.json();
    error.status = latest.status;
    throw error;
  }
  return latest.json();
}

export async function getHistory(url: string): Promise<HistoryCurrencyData[]> {
  const latest = await fetch(`api/blue/days${url}`);
  if (!latest.ok) {
    const error: any = new Error(`An error occurred while fetching the data.`);
    // Attach extra info to the error object.
    error.info = await latest.json();
    error.status = latest.status;
    throw error;
  }
  return latest.json();
}

export async function getCoins(): Promise<any> {
  const latest = await fetch(`api/crypto/coins`);
  if (!latest.ok) {
    const error: any = new Error(`An error occurred while fetching the data.`);
    // Attach extra info to the error object.
    error.info = await latest.json();
    error.status = latest.status;
    throw error;
  }
  return latest.json();
}
