import { motion } from 'framer-motion'
import styles from './Banner.module.scss'

interface Prop{
    text: string
}
export function Banner(prop: Prop){
    const svgVariants = {
        hidden: {x: "100px"},
        show: {
            x: '-10px',
            transition: {
                delay: 1,
                duration: 13,
                ease: "linear",
            }
        }
    }
    const pathVariants = {
        hidden: {
            pathLength: 1,
        }
    }
       const {text} = prop 
    return(
        <motion.div whileHover={{scale: 1}} className={styles.banner}>
            {text}
            <div className={styles.banner__circleMotion}> 
                <motion.span 
                    className={styles.banner__transitionLeft}
                    animate={{
                        skewX: [ 0, 0, 15, 5],
                        scaleX: [6, 6, 6, 1]
                }}
                    transition={{duration: 2, delay: 1}}
                />

            </div>
        </motion.div>
    )
}