import React from 'react';
import styled from "styled-components";

const Banner = styled.div`
    background: #000;
    text-align: center;
    height: 40pt;
    line-height: 40pt;
    font-size: 12pt;
    color: #fff;
`

const MastheadBanner = () => {
    return (
        <Banner>
            International Shipping available! Free shipping for orders above USD 150Type something
        </Banner>
    )
}

export default MastheadBanner
