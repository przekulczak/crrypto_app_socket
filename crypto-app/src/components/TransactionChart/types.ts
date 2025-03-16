export interface AggregateTradeSocketData {
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  a: number; // Aggregate trade ID
  p: string; // Price
  q: string; // Quantity
  f: number; // First trade ID
  l: number; // Last trade ID
  T: number; // Trade time
  m: boolean; // Is the buyer the market maker?
}

export interface TransactionData {
  timestamp: number;
  volume: string;
  price: string;
}

export interface OptionParams {
  prices: string[];
  volumes: string[];
  timestamps: string[];
}
