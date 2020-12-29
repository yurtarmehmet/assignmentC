import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const BreadCrumbComp = styled.div`
    height: 60pt;
    line-height: 60pt;
    font-size: 18pt;
    color: #030303;
    -webkit-box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.2); 
    box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.2);
`

const BreadCrumbItem = styled.a`
    cursor: pointer;
    :not(:last-child):after{
        content: ">";
        margin: 0 8pt;
    }
`

const BreadCrumb = ({breadCrumbs}) => {
    return (
        <BreadCrumbComp>
            <div className="container">
                {breadCrumbs.map((breadCrumb , index) => {
                    return <Link key={index} href={breadCrumb.url}><BreadCrumbItem>{breadCrumb.name}</BreadCrumbItem></Link>
                })}
            </div>
        </BreadCrumbComp>
    )
}

export default BreadCrumb
