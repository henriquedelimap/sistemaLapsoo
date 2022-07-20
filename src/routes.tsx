import { DefaultDashboard } from '@/pages/defaulDashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Add } from '@/pages/add'
import { AddFormulario } from '@/pages/add/addFormulario'
import {Login} from '@/pages/login'
import { useState } from 'react'
import { UsuarioProvider } from '@/common/context/Usuario'
import { Gerenciar } from '@/pages/gerenciar'
import { GlobalProvider } from '@/common/context/Global'
import { AdicionarProvider } from '@/common/context/Adicionar'
import { Lista } from '@/components/lista'
import { Home } from '@/pages/home'
import { ThemeProvider } from '@/common/context/Theme'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
// import { AddFormulario } from '@/pages/add/addFormulario'

export function Rotas() {
    const [colorScheme, setColorScheme]= useState<ColorScheme>('light')
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    return(
        <Router>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={{colorScheme}}>
                    <ThemeProvider  >
                        <UsuarioProvider>
                            <GlobalProvider>
                                <AdicionarProvider>
                                    <Routes>
                                        <Route path='/' element={<Login />} />
                                        <Route path='/dashboard' element={<DefaultDashboard />} />
                                        <Route path='dashboard/*' element={<DefaultDashboard />}>
                                            <Route index element={<Home />} />
                                            <Route path='adicionar' element={<Lista />} />
                                            <Route path='gerenciar' element={<Add />} />
                                            <Route path='leads' element={<>w.i.p...</>} />
                                            <Route path='configurar' element={<p>configuração</p>} /> 

                                            <Route path=':gerenciar/*' element={<Add />}>
                                                <Route path=':lista' element={<Gerenciar />} /> 
                                            </Route>
                                            <Route path='adicionar/*' element={<Lista />} >
                                                <Route path=':plano' element={<AddFormulario />} /> 
                                            </Route>
                                        </Route>
                                    </Routes>
                                </AdicionarProvider>
                            </GlobalProvider>
                        </UsuarioProvider>
                    </ThemeProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </Router>
    )
}