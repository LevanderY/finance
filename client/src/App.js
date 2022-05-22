import { useEffect, useRef, useState } from 'react';
import socketIOClient from "socket.io-client";
import 'antd/dist/antd.css';
import './App.css';

const ENDPOINT = 'http://localhost:4000/'; 

const App = () => {
  const socketRef = useRef(null);
  const [tickers, setTickers] = useState([])

  useEffect(() => {
    if (socketRef.current == null) {
      socketRef.current = socketIOClient(ENDPOINT, {
        cors: {
          origin: "*",
        }
      });
    }

    const {current: socket} = socketRef;

    try {
      socket.open();
      socket.emit('start');
      socket.on('ticker', (data) => {
        setTickers(data);
      })
    } catch (error) {
      console.log(error);
    }
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="App">
      {tickers.map((item) => (
        <div key={item.ticker}>
          {item.ticker}: {item.price}
        </div>
      ))}
    </div>
  );
};

export default App;
