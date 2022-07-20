import { useParams, useLocation } from 'react-router-dom';
import styles from './Add.module.scss'
import { Config, ConfigPage } from 'types/IOperadora';
import { Formulario } from '@/components/formulario';
import { ScriptMenuLateral } from '@/components/menu/menuLateral/left/script';

export function AddFormulario(){
    const {pathname} = useLocation()

    const path = pathname.split('/')
    const configPage = ScriptMenuLateral.map((script: { route: string; configPage: ConfigPage; config: Config })=> path.includes(script.route) ? script.configPage : '')
    
    return(
        <>
            <div className={styles.addForm} >
                <Formulario config={configPage} />
            </div>
        </>
    )
}