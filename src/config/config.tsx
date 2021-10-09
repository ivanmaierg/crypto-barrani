export type envVariable = string | undefined;
export interface Config {
  apiKey1: envVariable;
  proxy: envVariable;
  base_url_coinranking: envVariable;
  base_url_blue: envVariable;
}
export const config: Config = {
  apiKey1: process.env.CR_API_KEY,
  proxy: process.env.PROXY,
  base_url_coinranking: process.env.BASE_URL_COINRANKING,
  base_url_blue: process.env.BASE_URL_BLUE,
};
