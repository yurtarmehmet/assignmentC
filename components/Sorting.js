import React , {useContext} from 'react';
import {Context} from "../context";
import Dropdown from './Dropdown';
import styled from "styled-components";

const SortingComp = styled.div`
    display: inline-block;
    float: right;
`

const Sorting = () => {
    const {setSorting} = useContext(Context)

    const options = ["Low", "High"]
    const handleSorting = (option) => {
        setSorting(options[option])
    }

    return (
        <SortingComp>
            Sort by
            <Dropdown name="Price" options={options} onClickFunc={handleSorting}/>
        </SortingComp>
    )
}

export default Sorting
