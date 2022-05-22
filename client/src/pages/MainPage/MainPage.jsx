import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef  } from 'react';
import socketIOClient from "socket.io-client";
import { ENDPOINT } from '../../constants'
import { getTickers } from '../../store/tickers/thunk';

const MainPage = () => {
    const dispatch = useDispatch();
    const { tickersList } = useSelector((state) => state.tickers);

    const socketRef = useRef(null);

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
            dispatch(getTickers(data))
          })
        } catch (error) {
          console.log(error);
        }
        return () => {
          socket.close();
        };
      }, [dispatch]);

      useEffect(() => {
        console.log(tickersList)
      }, [tickersList])

    return (
        <div>
            <h1>Ffff</h1>
        </div>
    )
}

export default MainPage;