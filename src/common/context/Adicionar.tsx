import React, { createContext, ReactNode, useState } from "react";

interface Prop {
    children: ReactNode;
}


export const AdicionarContect = createContext({})
AdicionarContect.displayName = "adicionar"

export const AdicionarProvider = (prop: Prop) => {
    const [novo, setNovo] = useState([{}])
    return( 
        <AdicionarContect.Provider value={{novo, setNovo}}>
            {prop.children}
        </AdicionarContect.Provider>
    )
}