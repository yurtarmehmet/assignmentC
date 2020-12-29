import React, { useState } from 'react';
import styled from "styled-components";

const DescriptionTitle = styled.span`
    font-size: 18pt;
    line-height: 30pt;
`
const DescriptionContent = styled.div `
    color: #666666;
    font-size: 16pt;
    line-height: 20pt;
    height: ${props => props.showingMore ? "auto" : "40pt"};
    display: -webkit-box;
    -webkit-line-clamp:  ${props => props.showingMore ? "none" : 2};
    -webkit-box-orient: vertical;  
    overflow: hidden;
`
const SeeMoreBtn = styled.span`
    cursor: pointer;
    font-size: 12pt;
    line-height: 20pt;
    font-weight: 600;
`

const Description = ({content}) => {
    const [showingMore, setShowingMore] = useState(false);

    const handleShowingMore = () => {
        setShowingMore(!showingMore);
    }

    return (
        <div>
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionContent showingMore={showingMore}>{content}</DescriptionContent>
            <SeeMoreBtn onClick={handleShowingMore}>{showingMore ? "SEE LESS" : "SEE MORE"}</SeeMoreBtn>
        </div>
    )
}

export default Description
