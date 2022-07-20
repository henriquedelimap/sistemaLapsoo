import { createContext, ReactNode, useState } from "react";

interface Prop {
    children: ReactNode;
}


export const UsuarioContext = createContext({})

UsuarioContext.displayName = "usuario"

export const UsuarioProvider = ({children}: Prop) => {
    const [user, setUser] = useState<React.Dispatch<React.SetStateAction<string>>>()
    const [password, setPassword] = useState<React.Dispatch<React.SetStateAction<string>>>()
    return (
        <UsuarioContext.Provider value={{user, setUser, password, setPassword}}>
            {children}
        </UsuarioContext.Provider>
    )
}
