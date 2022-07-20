import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
import {Text, useMantineTheme} from '@mantine/core'
export function Logo(){
    const theme = useMantineTheme()

    return(
        <Link to={'/dashboard'} className={styles.logo}>
            <Text className={styles.logo__lapso}>lapso<span className={styles.logo__lapso__o}>o</span> </Text>
        </Link>
    )
}