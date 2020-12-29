import React , {useState} from 'react';
import styled from "styled-components";

const DropdownComp = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 25pt;
    border: 1pt solid #dedede;
    width: 165pt;
    height: 40pt;
    line-height: 40pt;
    padding-left: 10pt;
    cursor: pointer;
`  
const DropdownContent = styled.div`
    display: ${props => props.opened ? "block" : "none"};
    position: absolute;
    z-index: 2;
    background: #fff;
    width: 165pt;
    left: 0;
    padding-left: 10pt;
    span {
        display: block;
        cursor: pointer;
    }
`

const Dropdown = ({name, options, onClickFunc}) => {
    const [opened, setOpened] = useState(false)

    return (
        <DropdownComp onClick={() => {opened ? setOpened(false) : setOpened(true)}}>
            <span>{name}</span>
            <DropdownContent opened = {opened}>
                {options.map((option, index) => {
                    return <span key={index} onClick={() => {onClickFunc(index)}}>{option}</span>
                })}

            </DropdownContent>
        </DropdownComp>
    )
}

export default Dropdown
