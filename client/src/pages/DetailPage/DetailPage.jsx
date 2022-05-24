import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import { findTickerByName } from "../../helpers/findTickerByName";

import s from "./DetailPage.module.css";

const DetailPage = () => {
    const { tickerId } = useParams();
    const { tickersList } = useSelector((state) => state.tickers);

    const [ticketData, setTickerData] = useState(
        findTickerByName(tickersList, tickerId)
    );

    useEffect(() => {
        setTickerData(findTickerByName(tickersList, tickerId));
    }, [tickerId, tickersList]);

    const {
        ticker,
        exchange,
        price,
        change_percent,
        dividend,
        last_trade_time,
    } = ticketData;

    return (
        <Container>
            <div className={s.column}>
                <p>Ticker:</p>
                <p>{ticker}</p>
            </div>
            <div className={s.column}>
                <p>Exchange:</p>
                <p>{exchange}</p>
            </div>
            <div className={s.column}>
                <p>Price:</p>
                <p>{price}</p>
            </div>
            <div className={s.column}>
                <p>Change percent:</p>
                <p>{change_percent}</p>
            </div>
            <div className={s.column}>
                <p>Dividend:</p>
                <p>{dividend}</p>
            </div>
            <div className={s.column}>
                <p>Yield:</p>
                <p>{ticketData.yield}</p>
            </div>
            <div className={s.column}>
                <p>Last trade time:</p>
                <p>{last_trade_time}</p>
            </div>
        </Container>
    );
};

export default DetailPage;
