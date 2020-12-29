import React from 'react';
import styled from "styled-components";

const SizeTitle = styled.span`
    font-size: 12pt;
    line-height: 40pt;
`

const SizeItem = styled.span`
    display: inline-block;
    width: 50pt;
    height: 40pt;
    border: 1pt solid #f3f3f3;
    line-height: 40pt;
    text-align: center;
    cursor: pointer;
    margin-right: 10pt;
`

const ActiveSizeItem = styled.span`
    background: #f3f3f3;
    display: inline-block;
    width: 50pt;
    height: 40pt;
    border: 1pt solid #ddd;
    line-height: 40pt;
    text-align: center;
    cursor: pointer;
    margin-right: 10pt;
`

const ModelInfo = styled.span`
    display: block;
    margin-top: 3pt;
    font-size: 12pt;
    color: #666666;
`

const Sizes = ({sizes , modelInfo, activeIndex, onClickFunc }) => {
    return (
        <div>
            <SizeTitle>SIZE</SizeTitle>
            <div>
                {sizes.map((size, index) => {
                    return index === activeIndex 
                        ? <ActiveSizeItem onClick={() => onClickFunc(index)} key={index}>{size}</ActiveSizeItem>
                        : <SizeItem onClick={() => onClickFunc(index)} key={index}>{size}</SizeItem>
                })}
            </div>
            <ModelInfo>{modelInfo}</ModelInfo>
        </div>
    )
}

export default Sizes
