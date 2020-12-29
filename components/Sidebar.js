import React , {useContext} from 'react';
import styled from "styled-components";
import Filtering from './Filtering';
import {Context} from "../context";

const Line = styled.div`
    height: 2pt;
    background: #f3f3f3;
`
const SidebarEl = styled.div`
    grid-column: span 12;
    @media(min-width: 600pt) {
        padding-right: 10pt;
        grid-column: span 3;
    }
`
const SidebarHeader = styled.div`
    height: 50pt;
    font-size: 12pt;
    line-height: 40pt;
    span:first-child {
        font-size: 12pt;
        color: #33333a;
    }
    span:last-child {
        float: right;
        color: #ff5e08;
        font-size: 12pt;
        cursor: pointer;
    }
`

const Sidebar = () => {
    const {setFiltering} = useContext(Context)

    return (
        <SidebarEl>
            <SidebarHeader>
                <span>FILTERS</span>
                <span onClick={() => {setFiltering(null)}}>RESET</span>                
            </SidebarHeader>
            <Line/>
            <Filtering/>
        </SidebarEl>
    )
}

export default Sidebar
