import { getTickers } from "../store/tickers/thunk";
import socketIOClient from "socket.io-client";
import { ENDPOINT } from "../constants";

export const getTickersSoket = (socketRef, dispatch) => {
    if (socketRef.current == null) {
        socketRef.current = socketIOClient(ENDPOINT, {
            cors: {
                origin: "*",
            },
        });
    }

    const { current: socket } = socketRef;

    try {
        socket.open();
        socket.emit("start");
        socket.on("ticker", (data) => {
            dispatch(getTickers(data));
        });
    } catch (error) {
        console.log(error);
    }

    return () => {
        socket.close();
    };
};
