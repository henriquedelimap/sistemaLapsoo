import classNames from 'classnames';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styles from './MenuDropDown.module.scss'
import { Grid, Button, SimpleGrid, Menu, Divider, Text, Switch, Group, useMantineColorScheme } from '@mantine/core'
import { Link } from 'react-router-dom';


export function MenuDropDown(

    prop: {
        status: any;
        icone: any;
        setOpenMenuDropDown: any;
        openMenuDropDown: any;
        left?: boolean;
        right?: boolean,
        script: {
            text: string;
            icone: JSX.Element;
            status: JSX.Element;
            subMenu: {
                text: string;
                icone: JSX.Element;
            }[]
        }[]
    }) {
    const { status, icone, setOpenMenuDropDown, openMenuDropDown, left, right, script } = prop
    const {colorScheme, toggleColorScheme} = useMantineColorScheme()

    return (
        <>
            {
                script?.map(item => (
                    <Menu
                        placement="end"
                        transition="pop"
                        transitionDuration={100}
                        transitionTimingFunction="ease"
                        size="lg"
                        shadow="xs"
                        control={
                            <Button>
                                {item.status}
                                {item.text}
                                {item.icone}
                            </Button>
                        }
                    >
                        <Menu.Label>{item.text}</Menu.Label>
                        {
                            item.subMenu.map(submenu => (

                                <Menu.Item
                                    component={Link}
                                    icon={submenu.icone}
                                    to='/'
                                >
                                    {submenu.text}
                                </Menu.Item>
                            ))
                        }
                        <Divider />
                        <Group style={{width: '100%', display: 'flex', justifyContent:'space-between', padding: "0 1.2rem"}}>
                            testes
                            <Switch onLabel="ON" offLabel="OFF" onChange={()=>toggleColorScheme()} />
                        </Group>
                    </Menu>
                ))
            }
        </>
    )
}