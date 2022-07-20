import classNames from 'classnames'
import { Add } from '@/pages/add'
import { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import styles from './Modal.module.scss'
import { Formulario } from '@/components/formulario'
import {Modal} from '@mantine/core'
interface Prop{
    opened: boolean
    setOpened: any

    handleClose?: () => void
    openModal?: boolean
}

export function ModalApp(prop: Prop) {
    const {opened, handleClose, openModal, setOpened} = prop
    return(
        <>
            <Modal
                opened={opened}
                onClose={()=>setOpened(!opened)}
                title="testando"
            >

            </Modal>
        </> 
        // <section className={classNames({[styles.close]: true,[styles.active]: isOpen || openModal})}>
        //     <div  className={styles.active__modal}>
        //         <div className={styles.active__modal__container}>
        //         <span 
        //             onClick={() => setOpenModal(!openModal)}
        //             className={styles.active__modal__container__iconeClose}>
        //             <VscChromeClose />
        //         </span>

        //         </div>
        //     </div>
        // </section>
    )
}