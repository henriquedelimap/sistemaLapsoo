import { Banner } from '@/components/banner'
import { DialogSystem } from '@/components/dialog'
import styles from './Home.module.scss'

export function Home(){
    return(
        <section className={styles.home}>
            <DialogSystem />
            <div className={styles.home__banner}>
                <Banner text="controle a atividade do seu site de forma otimizada" />
            </div>

        </section>
    )
}