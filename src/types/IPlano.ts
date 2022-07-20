export interface Plano{
    id?: number
    title: string | string[]
    descricao: string
    age?: [string[]]
    coParticipation?: string[]
    acomodacao?: string[]
    abrangencia?: string[]
    obstetria?: boolean
    category?: {
        id?: number
        label?: string
        operadora?: string
        administradora?: string
        ramo?: string
        modalidade?: string
        paleta?: string[]
    }
}
export interface Info{
    map: any
    id: number
    operadora: string
    administradora: string[]
}
export interface IImagem{
    id: number
    label: string
    title: string
    img: any
}
export interface IFiltro{
    
        id: number,
        planos: {id: string, name: string, option: string[]},
        acomodacao: {id: string, name: string, option: string[]} ,
        abrangencia: {id: string, name: string, option: string[]} ,
        regiao: {id: string, name: string, option: string[]} ,
        entidade: {id: string, name: string, option: string[]} ,
        idade: {id: string, name: string, option:[string[]]} 
    
}


export interface Operadora{
    title?: string
    descricao?: string
}