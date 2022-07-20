import { Seletor } from '@/components/seletor'
import { GlobalContext } from '@/common/context/Global'
import styles from './Lista.module.scss'
import { useContext } from 'react'
import { useLocation } from 'react-router'
import { Itens } from './itens'

export function Lista(){
    const {pathname} = useLocation()
    const path = (pathname.split('/'))[2]

    const {globalData} = useContext(GlobalContext)
    const dadosPagina = globalData.map((obj: {route: string, configPage: {}}) =>  obj.route === path ? obj.configPage :'')
    const configura = dadosPagina[0]

    return( 

        <section className={styles.lista}>
            <Seletor config={configura} />
            
            <Itens />
        </section>
    )
}