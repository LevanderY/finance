import { useState, useEffect } from "react";
import usePrevious from "../../hooks/usePrevious";
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const CheckGrowth = ({ growItem }) => {
    const [color, setColor] = useState();
    const [icon, setIcon] = useState();
    const prevGrow = usePrevious(growItem);

    useEffect(() => {
        if(Number(prevGrow) <= Number(growItem)) {
            setColor('green');
            setIcon(<UpOutlined />);
        } else if(Number(prevGrow) >= Number(growItem)) {
            setColor('red');
            setIcon(<DownOutlined/ >);
        } else {
            setIcon(null);
            setColor('#000');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [growItem])

    return  <div style={{color: color}}>{growItem} {icon}</div>
}

export default CheckGrowth;