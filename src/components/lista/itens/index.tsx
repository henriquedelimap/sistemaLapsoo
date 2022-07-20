import { ModalApp } from '@/components/modal'
import { useState } from 'react'
import { VscAdd } from 'react-icons/vsc'
import styles from './Itens.module.scss'

export function Itens(){
    const [opened, setOpened] = useState(false)
    function activeModal(){
        setOpened(true)
    }
    const handleClose = () => {
        setOpened(false)
    }
        return (
            <>
        <div className={styles.itens}>
            <div className={styles.itens__item}>

            </div>

            <div 
                onClick={()=>activeModal()}
                className={styles.itens__add}>
                <span className={styles.itens__add__icone}>
                    <VscAdd  />
                </span>
            </div>
        </div>
                <ModalApp opened={opened}  setOpened={setOpened} />
        </>
    )
}