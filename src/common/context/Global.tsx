import { createContext, ReactNode, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import uniqid from 'uniqid'
interface create{
    setCadastrar: React.Dispatch<React.SetStateAction<{}>>
    cadastrar: {}
}

interface Prop {
    children: ReactNode;
} 
export const GlobalContext = createContext({})

GlobalContext.displayName = "cadastro"

export const GlobalProvider = (prop: Prop) => {
    const [globalData, setGlobalData] = useState([

        {
            id: uniqid(),
            status: 0,
            route: 'adicionar',
            icon: <VscAdd />,
            text: 'adicionar',
            configPage: [
                {
                    page: 'plano',
                    label: 'plano',
                    to: 'plano',
                    value: {
                        id: uniqid(),
                        label: 'plano',
                        configInput: [
                            {
                                label: 'plano',
                                type: 'text',
                                value: '',
                                id: uniqid()
                            },
                            {
                                label: 'descrição',
                                type: 'text',
                                value: '',
                                id: uniqid()
                            },
                            {
                                label: 'descrição',
                                type: 'text',
                                value: '',
                                id: uniqid()
                            },
                            {
                                label: 'descrição',
                                type: 'text',
                                value: '',
                                id: uniqid()
                            },
                        ]
                    },
                },        
                {
                    page: 'operadora',
                    label: 'operadora',
                    to: 'operadora',
                    value: {
                        id: uniqid(),
                        label: 'operadora',
                        configInput: [
                            {
                                label: 'operadora',
                                type: 'text',
                                value: '',
                                id: uniqid()
                            },
                            {
                                label: 'descrição',
                                type: 'text',
                                value: '',
                                id: uniqid()
                            },
                        ]
                    },
                },
                {
                    page: 'administradora',
                    label: 'administradora',
                    to: 'administradora',
                    value: {
                        id: uniqid(),
                        label: 'administradora',
                        configInput: [
                            {
                                label: 'administradora',
                                type: 'text',
                                value: '',
                                id: uniqid()
                            },
                            {
                                label: 'descrição',
                                type: 'text',
                                value: '',
                                id: uniqid()
                            },
                        ]
                    },
                }
        ]
        },
        {
            id: uniqid(),
            page: 'gerenciar',
                
        },
        {
            id: uniqid(),
            page: 'leads',
                
        },
        {
            id: uniqid(),
            page: 'configuracao',
                
        }
    ]
    )

    return (

        <GlobalContext.Provider value={{globalData, setGlobalData}}>
            {prop.children}
        </GlobalContext.Provider>
    )
    
}