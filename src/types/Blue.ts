export interface CurrencyData {
  value_avg: string;
  value_sell: string;
  value_but: string;
}

export interface historyCurrencyData {
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

export interface countryRisk {
  fecha: string;
  valor: number;
}
