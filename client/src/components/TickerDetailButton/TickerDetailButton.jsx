import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const TickerDetailButton = ({tickerId}) => {
    const navigate = useNavigate()
    const onNavigateHandler = () => navigate(`ticker/${tickerId}`)

    return <Button onClick={onNavigateHandler}>Show more</Button>
}

export default TickerDetailButton;