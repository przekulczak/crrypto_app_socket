import { useState } from "react";
import { AggregateTradeSocketData, TransactionData } from "./types";

export function useTranscationChart() {
  const [transactions, setTranscations] = useState<TransactionData[]>([]);

  const handleData = (data: AggregateTradeSocketData) => {
    const { E, q, p } = data;
    setTranscations((prevTransactions: TransactionData[]) => {
      const newTransaction: TransactionData = {
        timestamp: E,
        volume: q,
        price: p,
      };

      const updatedTransactions = [...prevTransactions, newTransaction];

      if (updatedTransactions.length > 100) {
        return updatedTransactions.slice(-100);
      }
      return updatedTransactions;
    });
  };

  return { transactions, handleData };
}
