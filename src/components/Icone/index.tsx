import { MdAdd, MdClose, MdErrorOutline, MdOutlineArrowRight, MdOutlineDarkMode, MdOutlineFilterList, MdOutlineFingerprint, MdOutlineHistory, MdOutlineLightMode, MdOutlineReportGmailerrorred, MdOutlineSettings, MdOutlineSmartToy, MdOutlineVisibility, MdSearch, MdSecurity } from 'react-icons/md'

export function Icone(type: string){
    let icone
    switch(type){
        case "security":
            icone = <MdSecurity />
            break 
        case "login":
            icone = <MdOutlineFingerprint />
            break
        case "reportError": 
            icone = <MdOutlineReportGmailerrorred />
            break
        case "system":
            icone = <MdOutlineSmartToy />
            break
        case "error":
            icone = <MdErrorOutline />
            break
        case "history": 
            icone = <MdOutlineHistory />
            break
        case "close":
            icone = <MdClose />
            break
        case "view": 
            icone = <MdOutlineVisibility />
            break
        case "search":
            icone = <MdSearch />
            break 
        case "add":
            icone = <MdAdd />
            break 
        case "filterList":
            icone = <MdOutlineFilterList />
            break 
        case "setting":
            icone = <MdOutlineSettings />
            break 
        case "lightmode":
            icone = <MdOutlineLightMode />
            break 

        case 'darkmode': 
            icone = <MdOutlineDarkMode />
            break
        case "arrowRight":
            icone = <MdOutlineArrowRight />
            break  
        default:
            <p>e</p>
    }
    return icone
}