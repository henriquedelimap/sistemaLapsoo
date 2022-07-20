import { UsuarioContext } from 'common/context/Usuario'
import styles from './Gerenciar.module.scss'
import {useLocation} from 'react-router'

export function Gerenciar(){
    const {pathname} = useLocation()
    const path = pathname.split('/')
    
    return(
        <>{}</>
    )
}