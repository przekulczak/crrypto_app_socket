import { useRef, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { UseSocketParams } from "./types";

export function useSocket<T>({ url, getData }: UseSocketParams<T>) {
  const socketRef = useRef<WebSocket | null>(null);
  const { showBoundary } = useErrorBoundary();
  const [isConnected, setConnected] = useState(false);

  const connectWebSocket = () => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("opened");
      setConnected(true);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      getData(data);
    };

    socket.onerror = (error) => {
      setConnected(false);
      showBoundary(error);
    };

    socket.onclose = () => {
      setConnected(false);
    };

    socketRef.current = socket;
  };

  return { connectWebSocket, isConnected };
}
