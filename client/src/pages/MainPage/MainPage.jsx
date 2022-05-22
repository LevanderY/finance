import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef  } from 'react';
import { Table } from 'antd';
import socketIOClient from "socket.io-client";
import { ENDPOINT } from '../../constants'
import { getTickers } from '../../store/tickers/thunk';
import TickerDetailButton from '../../components/TickerDetailButton/TickerDetailButton';
import CheckGrowth from '../../components/CheckGrowth/CheckGrowth';

const { Column } = Table;

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
            dispatch(getTickers(data));
          })
        } catch (error) {
          console.log(error);
        }
        return () => {
          socket.close();
        };
      }, [dispatch]);

    return (
        <div>
            <Table pagination={{position: ['bottomCenter']}} dataSource={tickersList}>
              <Column title='Ticker' dataIndex='ticker' />
              <Column title='Exchange' dataIndex='exchange' />
              <Column 
                title='Price'
                key={'checkGrowthPrice'}
                render={({price}) => (
                    <CheckGrowth growItem={price}/>
                )}
              />
              <Column 
                title='Change percent'
                key={'changePercent'}
                render={({change_percent}) => (
                    <CheckGrowth growItem={change_percent}/>
                )}
              />
              <Column 
                title='Dividend'
                key={'changeDividend'}
                render={({dividend}) => (
                    <CheckGrowth growItem={dividend}/>
                )}
              />
              <Column 
                title='Yield'
                key={'changeYield'}
                render={(item) => (
                    <CheckGrowth growItem={item.yield}/>
                )}
              />
              <Column
                title={'Show more'}
                key='showMoreTicker'
                render={({ticker}) => (
                 <TickerDetailButton tickerId={ticker}/>
                )}
              />
            </Table>
        </div>
    )
}

export default MainPage;