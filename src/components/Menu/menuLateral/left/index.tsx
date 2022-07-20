import { Dispatch, JSXElementConstructor, ReactElement, ReactFragment, SetStateAction } from "react"
import { ScriptMenuLateral } from "./script"
import { Link, To } from "react-router-dom";
import { Text, Group, Indicator, Switch, useMantineColorScheme, Button } from "@mantine/core";
import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter} from 'react-pro-sidebar';
import { Icone } from "@/components/Icone";

interface Prop {
    image: any; 
    collapsed: any; 
    rtl: any; 
    toggled: any; 
    handleToggleSidebar: any; 
}

// interface ScriptMenu {
//     status: number;
//     type: string;
//     id: string;
//     route: string;
//     icon: string;
//     subMenu?: {
//         type?: string;
//         status: number;
//         id: string;
//         route: string;
//         icon: string;
//         iconAlter?: string
//         text: string;
//     }[];
//     text: string;
//     configPage?: {
//         label: string;
//         to: string;
//         id: string;
//         config?: {
//             id: string; type: string; label: string; 
//         } | undefined [];
// }}[];    



export const MenuLateralLeft=(prop: Prop ) =>{
    const { image, collapsed, rtl, toggled, handleToggleSidebar } = prop
    
    const {colorScheme, toggleColorScheme} = useMantineColorScheme()
    const dark = colorScheme === 'dark'


    function menu (ScriptMenuLateral: { status: number; type: string; id: string; route: string; icon: string; text: string; subMenu?: undefined; configPage?: undefined; } | { status: number; type: string; id: string; route: string; icon: string; subMenu: {
        type: string; status: number; id: string; route: string; icon: string; text: string; 
}[]; text: string; configPage: { label: string; to: string; id: string; config: { id: string; type: string; label: string; }[]; }[]; } | { status?: undefined; type?: undefined; id?: undefined; route?: undefined; icon?: undefined; text?: undefined; subMenu?: undefined; configPage?: undefined; }){    
        const {type, text, subMenu, icon, route} = ScriptMenuLateral
        const texto = <Text size="md">{text}</Text>
        
        let returnMenu 
        switch (type) {
            case 'menu':
                returnMenu = 
                    <Menu >
                        <MenuItem
                        icon={<Text size="md">{Icone(icon)}</Text>}
                        suffix={<Text>new</Text>}
                        >
                            <Text   >
                                {text}
                            </Text>
                            <Link replace to={route} />
                        </MenuItem>
                    </Menu>
                break;
            case 'subMenu':
                returnMenu = 
                    <SubMenu
                    style={{ margin: 0, padding: 0 }}
                    suffix={<Indicator position="middle-center" radius="sm" color='red' label='1' size={16} style={{ margin: "0 .4rem" }} children={undefined} />}
                    title={text}
                    icon={<Text size="md">{Icone(icon)}</Text>}
                    >
                        {subMenu?.map((item) => (
                            <>
                            
                            {
                                item.type === 'switch' 
                                ? <MenuItem
                                    icon={<Text size="md">{dark ? Icone(item.icon) : Icone(item.iconAlter)}</Text>}
                                    suffix={<Switch onLabel="ON" offLabel="OFF" color={dark ? 'yellow' : 'red'} onChange={()=>toggleColorScheme()} />}
                                    >
                                        <Text >
                                            {item.text}
                                        </Text>
                                    </MenuItem>
                                : <MenuItem 
                                    icon={<Text>{Icone(item.icon)}</Text>}><Text >{item.text}</Text> 
                                    <Link to={item.route} />
                                </MenuItem>
                            }
                            </>
                            ))}
                    </SubMenu>
                break;
            case 'multiSubMenu':
                returnMenu = 
                <SubMenu title="multiLevel" icon={<Text>{Icone('arrowRight')}</Text>}>
                    <MenuItem>'submenu' 1 </MenuItem>
                    <SubMenu title={`'submenu' 3`}>
                        <MenuItem>'submenu' 3.2 </MenuItem>
                        <SubMenu title={`'submenu' 3.3`}>
                        <MenuItem>'submenu' 3.3.3 </MenuItem>
                        </SubMenu>
                    </SubMenu>
                </SubMenu>        
                break;   

            default:
                break;
            }
        return returnMenu
    }
    return(
        // color={dark ? 'yellow' : 'red'}
    <Group>
        <ProSidebar 
            // image={false}
            style={{width: "auto"}}
            rtl={rtl}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            {/* <SidebarHeader >
                <Group>
                    <Text>
                        navegação
                    </Text>
                </Group>
            </SidebarHeader> */}
  
        <SidebarContent>
            {
                ScriptMenuLateral.map(scriptMenu => (
                    
                    <Menu style={{ margin: 0, padding: 0 }} >
                        {menu(scriptMenu)}
                    </Menu>
                ))
            }
        </SidebarContent>
  
        <SidebarFooter style={{ textAlign: "center" }}>
          
        </SidebarFooter>
      </ProSidebar>
    </Group>
    )
}




// <>
// {
//     ScriptMenuLateral.map(script=>{
//         return(   
//             <ProSidebar >
//                 <SidebarHeader>
//                     teste
//                 </SidebarHeader>
                
//                 <SidebarContent>
//                     <Menu>
                        
//                         <SubMenu title={script.text} icon={script.icon}>
                            
//                             {
//                                 script.subMenu.map(submenu => (
//                                     <Button onClick={()=>setOpen(!open)}>
//                                         <MenuItem icon={submenu.icon}>
//                                             {submenu.text}
//                                         </MenuItem>
//                                     </Button>
//                                 ))
//                             }

//                         </SubMenu>

//                     </Menu>
//                 </SidebarContent>
                
//                 <SidebarFooter>
//                     {/**
//                      *  You can add a footer for the sidebar ex: copyright
//                      */}
//                 </SidebarFooter>

                
//             </ProSidebar>                                
//         )
//     })
//  }
 
// </>
