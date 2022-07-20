import styles from './Status.module.scss'

export function Status() {
    return (
        <div className={styles.status}>
            <span className={styles.status__first} />
            <span className={styles.status__second} />
        </div>
    )
}