
export interface IPlano {
    title: string
    descricao: string
    age: number
    acomodacao: string
    abrangencia: string
    coParticipacao: string
    obstetria: boolean
    operadora: IOperadora
    category: ICategory
}
export interface IAdministradora{
    title: string
    descricao: string
    // planos: [IPlano]
}
export interface IOperadora {
    title: string
    descricao: string
    label: String
    // administradoras: [IAdministradora]
}
export interface ICategory {
    administradora: IAdministradora
    operadora: IOperadora
    plano: IPlano 
}


export interface Script {
    configPage: any
    page: {
        status: number
        id: string
        route: string
        icon: JSX.Element
        text: string
        configPage: ConfigPage[]
    }
}

export interface ConfigPage{
    map: any
    label: string
    to: string
    id: string
    config: Config[]
}

export interface Config {
    label: string
    to: string
    id: string
}