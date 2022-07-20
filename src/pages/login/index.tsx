import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import styles from './Login.module.scss'
import { UsuarioContext } from '@/common/context/Usuario'
interface Prop {
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setUser: React.Dispatch<React.SetStateAction<string>>
    user: string
    password: string
}

export function Login(){
    const {user, setUser, password, setPassword} = useContext<Prop>(UsuarioContext)
    
    const navigate = useNavigate()
    return( 
        <section className={styles.login}>

            <fieldset className={styles.login__fieldset}>
                <form action="" className={styles.login__fieldset__form} id="formularioCadastro">
                    <div className={styles.login__fieldset__form__div}> 
                        <input 
                            value={user}
                            onChange={(event)=>setUser(event.target.value)}
                            id="user" 
                            type="text" 
                            className={styles.login__fieldset__form__div__input} 
                            placeholder=" " />
                        <label htmlFor="user" className={styles.login__fieldset__form__div__label}> <span> user:</span> </label>
                    </div>


                    <div className={styles.login__fieldset__form__div}>
                        <input 
                            value={password}
                            onChange={(event)=>setPassword(event.target.value)}
                            id="password" 
                            type="password" 
                            className={styles.login__fieldset__form__div__input} 
                            placeholder=" " />
                        <label htmlFor="password" className={styles.login__fieldset__form__div__label}> <span>password: </span> </label>
                    </div>



                    <button onClick={(event)=> {
                        event.preventDefault() 
                        navigate('dashboard')}} 
                        className={styles.login__fieldset__form__submit}>log in</button> 

                </form>

            </fieldset>

        </section>

        
    )
}