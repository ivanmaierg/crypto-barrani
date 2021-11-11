export interface CurrencyData {
  value_avg: number;
  value_sell: number;
  value_but: number;
}

export interface HistoryCurrencyData {
  date: string;
  source: string;
  value_sell: number;
  value_buy: number;
}

export interface BlueResponse {
  oficial: CurrencyData;
  blue: CurrencyData;
  oficial_euro: CurrencyData;
  blue_euro: CurrencyData;
  last_update: string;
}

export interface CountryRisk {
  date: string;
  value: number;
}

export interface BlueData {
  usd: {
    oficial: CurrencyData;
    blue: CurrencyData;
  };
  eur: {
    oficial: CurrencyData;
    blue: CurrencyData;
  };
  lastUpdate: string;
}
