import classNames from "classnames";
import { Dispatch, SetStateAction, useState } from "react";
import { VscAdd, VscEdit } from "react-icons/vsc";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { Config, ConfigPage } from "types/IOperadora";
import styles from './Seletor.module.scss';


interface Prop {
    config: ConfigPage | any
}
export function Seletor(prop: Prop  ){
    const navigate = useNavigate()
    const { config } = prop
    const {pathname} = useLocation() 
       
    const path = pathname.split('/')
    
    return( 
        <nav className={styles.seletor}>
            <ul className={styles.seletor__ul}>
                <>
                    {
                        config?.map((item: {to: string, id: string, label: string}) => (


                            <li 
                            onClick={()=>{
                                navigate(item.to)}
                            }
                            key={item.id} 
                            className={classNames({
                                [styles.seletor__ul__li]: true,
                                [styles.active]: path.includes(item.to)
                            })}
                            >
                            
                        <span className={classNames({
                            [styles.seletor__ul__li__link]: true,
                            [styles.active]: path.includes(item.to)
                        })}>{item.label}</span>
                        <VscEdit />
                    </li>
                        ))
                    
                    }
                </>
                <li className={styles.seletor__ul__li}>
                    <VscAdd />
                </li>
            </ul>
        </nav>
    )
}