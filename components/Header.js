import React from 'react';
import Link from "next/link";
import Sorting from "./Sorting";
import styled from "styled-components";

const Header = styled.div`
    height: 60pt;
    line-height: 60pt;
    -webkit-box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.2); 
    box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.2);
`

const Logo = styled.a`
    font-size: 18pt;
    text-decoration: none; 
    color: #030303;
    cursor: pointer;
`

const HomepageHeader = ({sorting}) => {
    return (
        <Header>
            <div className="container">
                <Link  href="/">
                    <Logo>Women</Logo>
                </Link>
                {sorting && <Sorting/>} 
            </div>
        </Header>
    )
}

export default HomepageHeader
