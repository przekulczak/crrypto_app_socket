import { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { useSocket } from "../../helpers/useSocket";
import { getOption } from "./option";
import { AggregateTradeSocketData, TransactionData } from "./types";
import "./styles.css";
import { Loader } from "./loader";
import { useTranscationChart } from "./useTransactionChart";
import { getUrl } from "../../helpers/getUrl";

export const TransactionChart = () => {
  const url = getUrl({ from: "btc", to: "usdt", endpoint: "aggTrade" });
  const { transactions, handleData } = useTranscationChart();
  const { connectWebSocket, isConnected, disconnectWebSocket } =
    useSocket<AggregateTradeSocketData>({
      url,
      getData: (data: AggregateTradeSocketData) => handleData(data),
    });

  useEffect(() => {
    connectWebSocket();
    return () => {
      disconnectWebSocket();
    };
  }, []);

  const prices = transactions.map((data: TransactionData) => data.price);
  const volumes = transactions.map((data: TransactionData) => data.volume);
  const timestamps = transactions.map((data: TransactionData) =>
    new Date(data.timestamp).toLocaleTimeString()
  );
  const option = getOption({ prices, volumes, timestamps });
  const isLoading = !isConnected || transactions.length < 10;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ReactECharts option={option} className="chart" />
      )}
    </div>
  );
};
