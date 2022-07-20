import classNames from 'classnames'
import { Icone } from '@/components/Icone'
import styles from './Notification.module.scss'
import { useRef, useState } from 'react'
import { Button, Drawer, Grid, Group, Indicator, Notification, ScrollArea, Text, Stack } from '@mantine/core'


interface Prop{
    openNotify: any
    setOpenNotify: any
    script: {
        text: string
        icone: JSX.Element
        notification: {
            id: number
            type: string
            title: string
            img: string
            message: string
            dataTime: string
        }[];
    }
}


export function AppNotification(prop: Prop) {
    const viewport = useRef()
    const {openNotify, setOpenNotify, script} = prop
    const [close, setClose] = useState(false)
    const [id, setId] = useState<Number>()
    return(
        <>
        <Group position='center'>
            <Indicator inline offset={3} position="top-start" color='red' label='1' size={18}>
            <Button 
                onClick={() => setOpenNotify(!openNotify)} >
                    <Grid columns={6}>
                        <Grid.Col span={2}>
                            {script.text}
                        </Grid.Col>

                        <Grid.Col offset={2} span={2}>
                                {script.icone}
                        </Grid.Col>
                    </Grid>

            </Button>
            </Indicator>
        </Group>

        <Drawer 
            opened={openNotify}
            onClose={() => setOpenNotify(!openNotify)}
            title={script.text}
            padding='xl'
            size='xl'
            position='right'
            // overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={.2}
            overlayBlur={3}
        >
            <ScrollArea  style={{ height: "96%" }} viewportRef={viewport} scrollbarSize={4} type="scroll" offsetScrollbars scrollHideDelay={0}>      
            <Stack spacing='xs' >
            {
                script?.notification.map(item => (

                    <Notification title={item.title} icon={Icone(item.type)} >
                        {item.message}. <Text > {item.dataTime === 'agora' ? 'agora' : `há ${item.dataTime}`} </Text>
                    </Notification>
                ))
            }
            </Stack>
            </ScrollArea>

        </Drawer>

        </>



        // <div className={styles.notification}>

        //     <div className={classNames({
        //         [styles.notification__item]: true,
        //         [styles.notification__item__ativo]: openNotify
        //     })} onClick={()=>setOpenNotify(!openNotify)}>

        //         <span className={styles.notification__item__text}>{script.text}</span>
        //         <span className={styles.notification__item__img}>{script.icone}</span>
        //     </div>

        //     <section className={classNames({
        //         [styles.notification__close]: true,
        //         [styles.notification__dropDown]: openNotify,
        //     })}>
                
        //         <div className={styles.notification__dropDown__header}>
        //             <span className={styles.notification__dropDown__header__title}>{script.text} </span>
        //             <span 
        //                 className={styles.notification__dropDown__header__icone}
        //                 onClick={()=>setOpenNotify(!openNotify)}
        //             >{Icone("close")}</span>
        //         </div>

        //         <div className={styles.notification__dropDown__filter}>
        //             <span className={styles.notification__dropDown__filter__first}>hoje</span>
        //             <span className={styles.notification__dropDown__filter__second}>geral</span>
        //         </div>


        //         <ul className={styles.notification__dropDown__container}>
        //         {
        //             script.notification.map(notification => (
        //                     <li 
        //                         className={styles.notification__dropDown__container__item} 
        //                         onMouseEnter={
        //                             ()=>{
        //                                 setClose(!close) 
        //                                 setId(notification.id)
        //                             }
        //                         }
        //                         onMouseLeave={
        //                             ()=>{
        //                                 setClose(!close) 
        //                                 setId(0)
        //                             }
        //                         }
        //                     >

        //                         <span className={styles.notification__dropDown__container__item__title}>{notification.title}</span>
        //                         <span className={styles.notification__dropDown__container__item__img}>  {Icone(notification.type)}</span>
        //                         <span className={styles.notification__dropDown__container__item__message}>{notification.message} </span>
        //                         <span className={styles.notification__dropDown__container__item__assets} >
        //                             <span className={styles.notification__dropDown__container__item__assets__time}> {notification.dataTime === 'agora' ? 'agora' : `há ${notification.dataTime}`} </span>
                                    
        //                         </span>
        //                         <span className={classNames({
        //                             [styles.notification__close]: true,
        //                             [styles.notification__dropDown__container__item__action]: close && id === notification.id 
        //                         })}>{Icone("view")} mostrar</span>
        //                     </li>
        //             ))
        //         }
        //         </ul>
        //     </section>
            
        // </div>
    )
}