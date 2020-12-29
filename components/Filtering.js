import React , {useContext} from 'react';
import {Context} from "../context";
import styled from "styled-components";

const FilterItem = styled.div`
    font-size: 12pt;
    line-height: 40pt;
    cursor: pointer;
`

const Filtering = () => {
    const {setFiltering} = useContext(Context)

    return (
        <div>
            <FilterItem onClick={() => {setFiltering("new")}}>NEW</FilterItem>
            <FilterItem onClick={() => {setFiltering("discount")}}>DISCOUNT</FilterItem>
        </div>
    )
}

export default Filtering
