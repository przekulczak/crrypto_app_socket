import { GetUrlParams } from "./types";

export const getUrl = ({ endpoint, from, to }: GetUrlParams) =>
  `wss://fstream.binance.com/ws/${from}${to}@${endpoint}`;
