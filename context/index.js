import React, { createContext , useState } from 'react'

export const Context = createContext();

const Provider = ({children}) => {
    const [ sorting , setSorting ] = useState(null);
    const [ filtering , setFiltering ] = useState(null);

    const values = {
        sorting,
        setSorting,
        filtering,
        setFiltering,
    }

    return (
        <Context.Provider value={values}>{children}</Context.Provider>
    )
}

export default Provider
