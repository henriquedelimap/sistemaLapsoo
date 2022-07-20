import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { VscSignOut } from 'react-icons/vsc'
import { MdOutlineAccountCircle, MdOutlineEventAvailable, MdOutlineKeyboard, MdOutlineKeyboardArrowDown, MdOutlineKeyboardVoice } from 'react-icons/md'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { useContext, useState } from 'react'
import { UsuarioContext } from '@/common/context/Usuario'
import { Wallet } from '@/components/wallet'
import { Logo } from '@/components/Logo'
import { Status } from '@/components/status'
import { MenuDropDown } from '@/components/menu/menuDropDown'
import { Search } from '@/components/search'
import { AppNotification } from '@/components/notification'
import { Grid, useMantineColorScheme } from '@mantine/core'
import { LoadSite } from "@/components/load";

const scriptMenuDropDown = [{
    text: 'development',
    icone: <MdOutlineKeyboardArrowDown />,
    status: <Status />,
    subMenu: [
        {
            text: 'test',
            icone: <MdOutlineEventAvailable />,
        },
        {
            text: 'test1',
            icone: <MdOutlineAccountCircle />,
        },
        {
            text: 'test2',
            icone: <MdOutlineKeyboardVoice />,
        }
    ]
}]


const notificationScript = {
    text: 'notificações',
    icone: <MdOutlineNotificationsNone />,
    notification: [
        {
            id: 1,
            type: 'error',
            title: "error",
            img: '',
            message: 'testabdo aqui',
            dataTime: 'agora'
        },
        {
            id: 2,
            type: 'system',
            title: "iniciando sistema",
            img: '',
            message: 'testabdo aqui',
            dataTime: '11 m'
        },
        {
            id: 3,
            type: 'history',
            title: "histórico da conta",
            img: '',
            message: 'testabdo aqui lorem isum ndjbasuidb  diasjbd isadb isa biasdb',
            dataTime: '42 m'
        },
        {
            id: 4,
            type: 'error',
            title: "error",
            img: '',
            message: 'testabdo aqui',
            dataTime: '1 h'
        },
        {
            id: 5,
            type: 'view',
            title: "vizualizações",
            img: '',
            message: 'testabdo aqui',
            dataTime: '4 h'
        },
        {
            id: 6,
            type: 'reportError',
            title: "erro ao carregar dados da conta",
            img: '',
            message: 'testabdo aqui lorem isum ndjbasuidb',
            dataTime: '15 h'
        },
        {
            id: 7,
            type: 'error',
            title: "error",
            img: '',
            message: 'testabdo aqui',
            dataTime: '1 h'
        },
        {
            id: 8,
            type: 'view',
            title: "vizualizações",
            img: '',
            message: 'testabdo aqui',
            dataTime: '4 h'
        },
        {
            id: 9,
            type: 'reportError',
            title: "erro ao carregar dados da conta",
            img: '',
            message: 'testabdo aqui lorem isum ndjbasuidb',
            dataTime: '15 h'
        },
        {
            id: 10,
            type: 'error',
            title: "error",
            img: '',
            message: 'testabdo aqui',
            dataTime: '1 h'
        },
        {
            id: 11,
            type: 'view',
            title: "vizualizações",
            img: '',
            message: 'testabdo aqui',
            dataTime: '4 h'
        },
        {
            id: 12,
            type: 'reportError',
            title: "erro ao carregar dados da conta",
            img: '',
            message: 'testabdo aqui lorem isum ndjbasuidb',
            dataTime: '15 h'
        },

    ]
}


export function HeaderDashboard() {

    const [openMenuDropDown, setOpenMenuDropDown] = useState(false)
    const [openNotify, setOpenNotify] = useState(false)
    const navigate = useNavigate()
    const { user } = useContext(UsuarioContext)
    const {colorScheme, toggleColorScheme} = useMantineColorScheme()
    const dark = colorScheme === 'dark'
    console.log(colorScheme);
    
    return (
        <>

            <Grid className={styles.header}
                
                gutter='xl'
                columns={16}
                grow
            >

                <Grid.Col span={16} style={{margin: -8, padding: "0 0"}}>
                    <LoadSite />
                </Grid.Col>

                <Grid.Col span={1} styles={{width: "1rem"}} >
                    <Logo />
                </Grid.Col>
                <Grid.Col span={2} >
                    <MenuDropDown
                        script={scriptMenuDropDown}
                        openMenuDropDown={openMenuDropDown}
                        setOpenMenuDropDown={setOpenMenuDropDown}
                        right={true}
                    />
                </Grid.Col>

                <Grid.Col span={8}   >
                    <Search />
                </Grid.Col>

                <Grid.Col span={2} >
                    <Wallet />
                </Grid.Col>


                <Grid.Col span={2}>
                    <AppNotification
                        color="red"
                        openNotify={openNotify}
                        setOpenNotify={setOpenNotify}
                        script={notificationScript}
                    />
                </Grid.Col>
            </Grid>
        </>
    )
}