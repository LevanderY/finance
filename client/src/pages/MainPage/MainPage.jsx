import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { Table } from "antd";
import TickerDetailButton from "../../components/TickerDetailButton/TickerDetailButton";
import CheckGrowth from "../../components/CheckGrowth/CheckGrowth";
import { getTickersSoket } from "../../helpers/getTickersSoket";

const { Column } = Table;

const MainPage = () => {
    const dispatch = useDispatch();
    const { tickersList } = useSelector((state) => state.tickers);

    const socketRef = useRef(null);

    useEffect(() => {
        getTickersSoket(socketRef, dispatch);
    }, [dispatch]);

    return (
        <div>
            <Table
                pagination={{ position: ["bottomCenter"] }}
                dataSource={tickersList}
                rowKey={"ticker"}
            >
                <Column
                    title="Ticker"
                    dataIndex="ticker"
                    render={(ticker) => (
                        <p data-testid={`tickers-${ticker}`}>{ticker}</p>
                    )}
                />
                <Column title="Exchange" dataIndex="exchange" />
                <Column
                    title="Price"
                    key={"checkGrowthPrice"}
                    render={({ price }) => <CheckGrowth growItem={price} />}
                />
                <Column
                    title="Change percent"
                    key={"changePercent"}
                    render={({ change_percent }) => (
                        <CheckGrowth growItem={change_percent} />
                    )}
                />
                <Column
                    title="Dividend"
                    key={"changeDividend"}
                    render={({ dividend }) => (
                        <CheckGrowth growItem={dividend} />
                    )}
                />
                <Column
                    title="Yield"
                    key={"changeYield"}
                    render={(item) => <CheckGrowth growItem={item.yield} />}
                />
                <Column
                    title={"Show more"}
                    key="showMoreTicker"
                    render={({ ticker }) => (
                        <TickerDetailButton tickerId={ticker} />
                    )}
                />
            </Table>
        </div>
    );
};

export default MainPage;
