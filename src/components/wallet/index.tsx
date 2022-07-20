import styles from './Wallet.module.scss'
import gema from '@/assets/img/walletGema.png'
import { useState } from 'react'
import { ModalApp } from '@/components/modal'
import classNames from 'classnames'

export function Wallet(){
const [opened, setOpened] = useState(false)

    return( 
        <>
            <div className={classNames({
                [styles.wallet]: true,
                [styles.wallet__ativa]: opened
            })} onClick={()=>setOpened(!opened)}>
                <span className={styles.wallet__img}>
                    <img src={gema} />
                </span>
                <span className={classNames({
                [styles.wallet__value]: true,
                [styles.wallet__ativa__value]: opened
            })}>
                    1090.03 lps
                </span>
            </div>
            <ModalApp opened={opened} setOpened={setOpened} />
        </>
    )
}