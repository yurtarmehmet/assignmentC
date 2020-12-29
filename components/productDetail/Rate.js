import React from 'react';
import styled from "styled-components";

const Rating = styled.div`
    display: inline-block;
    float: right;
    font-size: 16pt;
`

const RatingStars = styled.div`
    display: inline-block;
    position: relative;
    margin-right: 10pt;
    font-size: 20pt;
`
const RatingUpper = styled.div`
    position: absolute;
    color: #ff5e08;
    overflow: hidden;
    width: ${props => props.rate}%;
`
const RatingLower = styled.div`
    color:#666666;
`

const Rate = ({rateData}) => {
    const rate = rateData ? rateData * 20 : 0;
    const fixedRate = rateData ? rateData.toFixed(1) : 0.00;

    return (
        <Rating>
            <RatingStars>
                <RatingUpper rate={rate}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </RatingUpper>
                <RatingLower>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </RatingLower>
            </RatingStars>
            <span>{fixedRate} of 5</span>
        </Rating>
    )
}

export default Rate

