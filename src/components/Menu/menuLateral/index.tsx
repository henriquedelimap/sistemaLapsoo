import styles from './MenuLateralRight.module.scss'
import { Doughnut, Line } from 'react-chartjs-2'
import { MenuLateralLeft } from './left'
import { Avatar } from '@mantine/core'
import image from '@/assets/img/perfil.png'
export function MenuLateral(){
    return(
        <nav className={styles.menuRight}>
            <div style={{display: 'flex', alignItems: "center", flexDirection: 'column'}}>


            {/* <div className={styles.menuRight__header}>

                <div className={styles.menuRight__header__border}>
                    <span className={styles.menuRight__header__border__contsiner}>
                        <span className={styles.menuRight__header__border__contsiner__img}>
                        </span>
                    </span>
                </div>
            </div> */}
            <Avatar  style={{position: 'relative', width: '8rem', height: '8rem', borderRadius: '50rem', boxShadow: '0 0 0 1px #ffffff' }}>LP</Avatar>
           <MenuLateralLeft image={undefined} collapsed={undefined} rtl={undefined} toggled={undefined} handleToggleSidebar={undefined} />
            </div>
            
            <div className={styles.menuRight__footer}>
                <span>sair</span>
            </div>
        </nav>
    )
}