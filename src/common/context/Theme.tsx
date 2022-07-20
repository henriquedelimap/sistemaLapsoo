import {MantineProvider, useMantineTheme, Global, useMantineColorScheme} from '@mantine/core'

export function ThemeProvider(prop: { children: any }){
    const {colorScheme, toggleColorScheme} = useMantineColorScheme()

    const theme = useMantineTheme()
    return(
        <>
        <Global styles={(theme) => ({
            '*, *::before, *::after': {
                boxSizing: 'border-box',
            }
        })} />
            
        <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
            loader: 'bars',
            colorScheme: colorScheme,
            colors: {
            },
        }}
        >
        {prop.children}
    </MantineProvider>
        </>
    )
}