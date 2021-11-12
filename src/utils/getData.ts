import { BlueData, CountryRisk, HistoryCurrencyData } from '@/types/Blue';

export async function getLatestBlue(): Promise<BlueData> {
  const latest = await fetch(`api/blue`);
  return latest.json();
}

export async function getRisk(): Promise<CountryRisk> {
  const latest = await fetch(`api/blue/risk`);
  return latest.json();
}

export async function getHistory(url: string): Promise<HistoryCurrencyData[]> {
  const latest = await fetch(`api/blue/days${url}`);
  return latest.json();
}
