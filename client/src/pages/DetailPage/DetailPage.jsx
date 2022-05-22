import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from '../../components/Container/Container'
import { findTickerByName } from "../../helpers/findTickerByName";
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

import s from './DetailPage.module.css'

const DetailPage = () => {
    const { tickerId } = useParams();
    const { tickersList } = useSelector((state) => state.tickers);

    const [ticker] = useState(findTickerByName(tickersList, tickerId));

    return (
        <Container>
        {ticker.map((item) => (
            <div key={item.ticker}>
                <div className={s.column}>
                    <p>Ticker:</p>
                    <p>{item.ticker}</p>
                </div>
                <div className={s.column}>
                    <p>Exchange:</p>
                    <p>{item.exchange}</p>
                </div>
                <div className={s.column}>
                    <p>Price:</p>
                    <p>{item.price}</p>
                </div>
                <div className={s.column}>
                    <p>Change percent:</p>
                    <p>{item.change_percent}</p>
                </div>
                <div className={s.column}>
                    <p>Dividend:</p>
                    <p>{item.dividend}</p>
                </div>
                <div className={s.column}>
                    <p>Yield:</p>
                    <p>{item.yield}</p>
                </div>
                <div className={s.column}>
                    <p>Last trade time:</p>
                    <p>{item.last_trade_time}</p>
                </div>
            </div>
        ))}
        </Container>
    )
}

export default DetailPage;