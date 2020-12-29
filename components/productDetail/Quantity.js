import React, {useState} from 'react';
import styled from "styled-components";

const QuantityComp = styled.div`
    width: 122pt;
    height: 40pt;
    border: 1pt solid #dedede;
    display: inline-block;
    float: left;
    span {
        width: 40pt;
        display: inline-block;
        float: left;
        height: 38pt;
        line-height: 38pt;
        text-align: center;
        font-size: 14pt;
        :not(:nth-child(2)) {
            background: #f3f3f3;
            cursor: pointer;
            font-size: 30pt;
            line-height: 32pt;
        }
    }
`

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

    const decrease = () => {
        quantity > 1 && setQuantity(quantity - 1);
    }
    const increase = () => {
        setQuantity(quantity + 1);
    }

    return (
        <QuantityComp>
            <span onClick={decrease}>-</span>
            <span>{quantity}</span>
            <span onClick={increase}>+</span>
        </QuantityComp>
    )
}

export default Quantity
