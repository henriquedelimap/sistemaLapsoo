// import { ChangeEvent, Key, useContext, useState } from 'react'
// import { VscAdd } from 'react-icons/vsc'
// import { useLocation, useParams } from 'react-router-dom'
// import { ConfigPage } from 'types/IOperadora'
// import styles from './Formulario.module.scss'
// import uniqid from 'uniqid'
// import { GlobalContext } from '@/common/context/Global'
// import { AdicionarContect } from '@/common/context/Adicionar'
// interface Config {
//     config: ConfigPage[]
//     id: string
//     type: string
//     label: string
// }

// interface Prop{
//     setGlobalData: React.Dispatch<React.SetStateAction<{}>>
//     globalData: Cadastrar
//     novo: [{}]
//     setNovo: React.Dispatch<React.SetStateAction<{}[]>>
//     addObj: any
//     setAddObj: React.Dispatch<React.SetStateAction<[{}]>>
// }
// interface Novo{
//     inputAtual: string
//     id: string
// }
// interface Cadastrar {
//         [x: string]: any
//         config: any
//         new :{
//             id: string
//             config: Config

//         }
// }
// interface Add {
//     new: { [x: string]: string; }
// }

export function Formulario(){}
//     const {pathname} = useLocation()
//     const {globalData, setGlobalData} = useContext<Prop>(GlobalContext)
//     const {novo, setNovo} = useContext<Prop>(AdicionarContect)
//     const [addObj, setAddObj] = useState([{}])
//     const path = (pathname.split('/'))[2]
//     const pathItem = (pathname.split('/'))[3]
    
//     const dadosPaginaAtual = (globalData.map((obj: { page: string }) =>  obj.page === path ? obj : '')).filter((i: any)=>i)[0]
//     const dadosInput = (dadosPaginaAtual.configPage.map((obj: { page: string }) => obj.page === pathItem ? obj : '')).filter((i: any)=>i)[0]
//     const inputs = dadosInput.value.configInput
    
//     function montarObjeto({id, value, label}:{id: string, value: string, label: string}){
//         const existe = addObj.some(itemAntigo => itemAntigo.identificador === id ? itemAntigo.valor = value : '')
//         const objeto = {label, identificador: id, valor: value}
        
//         if(!existe){
//             return setAddObj(prev => [...prev, objeto])
//         }    
//     }
//     function adicionaObjeto(newObj: {}[]){
//         return setNovo(anterior => [...anterior, {id: uniqid(), page: dadosInput.value.label, pageID: dadosInput.value.id, dados: newObj}])  
//     }
    
//     return(
//         <>
//             <form className={styles.formulario}>
//                 {
//                 (inputs.map((input: { label: string | undefined; id: Key | null | undefined; type: string | (string & {}) | undefined })=>{
//                     return(

//                         <label className={styles.formulario__label} htmlFor={`${input.label}`} key={(input.id)}>
//                         <span className={styles.formulario__label__span}>{`${input.label}`}</span>
//                         <input  
//                             onChange={(event)=>{
//                                 event.preventDefault()
//                                 montarObjeto({id: input.id, value: event.target.value, label: input.label})
//                             }}
//                             className={styles.formulario__label__input} 
//                             type={(input.type)} 
//                             name={(input.label)} 
//                             id={(input.label)} />
//                     </label>
//                 )
//                 }))
//                 } 
//                 <button 
//                     onClick={(e) => {
//                         e.preventDefault()
//                         adicionaObjeto(addObj)
//                     } }
//                     className={styles.formulario__button} >
//                     <VscAdd />
//                 </button>
//             </form>
//             <div>
//                 {
//                     novo.map(item => item.dados?.map(dado => (
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>{dado.label}</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>{dado.valor}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     )))
//                 }
//             </div>
//         </>
//     )
// }
