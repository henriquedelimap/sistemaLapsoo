import { MenuLateralLeft } from "@/components/menu/menuLateral/left";
import { MenuLateral } from "@/components/menu/menuLateral";
import { SetStateAction, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { HeaderDashboard } from "../../components/header";
import styles from './DefaultDashboard.module.scss'
import { useMantineTheme } from '@mantine/core'
import { AppShell, Navbar, Text, MediaQuery, Aside, Footer, Header, Burger } from "@mantine/core";
import '@/components/menu/menuLateral/left/custom.scss'


export function DefaultDashboard() {
    const [active, setActive] = useState<SetStateAction<string> | undefined>('a')
    const id = useParams()

    const theme = useMantineTheme()

    const idParams = Object.keys(id).map(key => id[key])
    const [opened, setOpened] = useState(false)

    return (
        <AppShell
            styles={{
                main: {
                    //   background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                    <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                    <MenuLateral />
                    </Navbar>
            }
            // aside={
            //     <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            //         <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            //         <MenuLateralRight />
            //         </Aside>
            //     </MediaQuery>
            // }
            header={
                <Header height={70} p="md">
                    <div style={{ display: 'block', alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                // color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                        <HeaderDashboard />
                    </div>
                </Header>
            }
        >
            <Outlet />
        </AppShell>
    )
}