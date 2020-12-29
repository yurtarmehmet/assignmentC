import React, { useState } from 'react';
import styled from "styled-components";
import Description from "./Description";
import Quantity from './Quantity';
import Rate from './Rate';
import Sizes from './Sizes';

const DetailContent = styled.div`
    padding-left: 15pt;
    width: 50%;
    min-width: 400pt;
    @media(max-width: 1000pt) {
        width: 100%;
        min-width: auto;
    }
`

const Line = styled.div`
    height: 2pt;
    background: #f3f3f3;
`

const Price = styled.span`
    color: #ff5e08;
    font-size: 24pt;
    line-height: 30pt;
`

const ProductInfo = styled.div`
    display: flex;
    height: 50pt;
    line-height: 50pt;
    span{
        flex: 1;
        font-size: 18pt;
        :last-child {
            color: #666666;
            font-size: 16pt;
        }
    }
`

const QuantityTitle = styled.span`
    line-height: 40pt;
    font-size: 12pt;
    color: #33333a;
`

const AddToCartBtn = styled.div`
    cursor: pointer;
    display: inline-block;
    background: #000;
    color: #fff;
    height: 40pt;
    line-height: 40pt;
    text-align: center;
    font-size: 12pt;
    padding: 0 40pt;
    margin: 0 20pt;
`

const AddToCWishListBtn = styled.div`
    cursor: pointer;
    display: inline-block;
    height: 40pt;
    line-height: 40pt;
    text-align: center;
    font-size: 12pt;
    border-bottom: 2pt solid #000;
`

const ProductDetailContent = ({product}) => {
    const [activeSizeIndex, setActiveSizeIndex ] = useState(0);
    const changeSize = (index) => {
        setActiveSizeIndex(index);
    }

    return (
        <DetailContent>
            <h1>{product.name}</h1>
            <Price>{`USD ${product.price.toFixed(2)}`}</Price>
            <Rate rateData={product.rate}/>
            <Line/>
            <Description content={product.content}/>
            <Line/>
            <ProductInfo><span>Artisan Employment</span><span>54 jobs</span></ProductInfo>
            <Line/>
            <ProductInfo><span>Partnership</span><span>Randall Armstrong</span></ProductInfo>
            <Line/>
            <ProductInfo><span>In Collab</span><span>Augusta Mendoza</span></ProductInfo>
            <Line/>
            <Sizes sizes={["1", "2", "3", "4"]} modelInfo="Model is a US Size 2-4, wears Matter Size 1. 175 cm tall." activeIndex={activeSizeIndex} onClickFunc={changeSize}/>
            <QuantityTitle>QUANTITY</QuantityTitle>
            <div>
                <Quantity/>
                <AddToCartBtn>ADD TO CART</AddToCartBtn>
                <AddToCWishListBtn>ADD TO WISHLIST</AddToCWishListBtn>
            </div>

        </DetailContent>
    )
}

export default ProductDetailContent
