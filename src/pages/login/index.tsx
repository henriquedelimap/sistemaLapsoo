import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import styles from './Login.module.scss'
import { UsuarioContext } from '@/common/context/Usuario'
import { useForm } from '@mantine/hooks'
import { Box, Button, Center, Checkbox, Group, PasswordInput, TextInput} from '@mantine/core'



interface Prop {
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setUser: React.Dispatch<React.SetStateAction<string>>
}

export function Login(){
    const { setUser, setPassword} = useContext<Prop>(UsuarioContext)
    
    const form = useForm({
        initialValues: {
            user: '',
            password: '',
            keepLoggedIn: false
        },
    })
    
    const navigate = useNavigate()
    return( 
       <Center style={{height: "100vh"}}>

        <Box sx={{maxWidth: 600}}  mx='auto' >
            <form onSubmit={form.onSubmit((values) => {
                setUser(values.user)
                setPassword(values.password)
                
            } )}>
                <TextInput
                    required 
                    label='username'
                    placeholder='digite seu username aqui'
                    {...form.getInputProps('user')}
                />
                <PasswordInput 
                    required
                    mt="md"
                    label='password'
                    description=''
                    {...form.getInputProps('password')}
                />
                <Checkbox 
                    mt='md'
                    label='manter-me logado'
                    {...form.getInputProps('keepLoggedIn', {type: 'checkbox'})}
                />

                <Group position='right' mt='md'>
                    <Button type='submit'>acessar</Button>
                </Group>
            </form>
        </Box>
       </Center>
        
    )
}