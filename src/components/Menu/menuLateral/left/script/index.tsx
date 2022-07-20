// import { MdSettings, MdManageSearch, MdDashboardCustomize, MdContacts } from 'react-icons/md'
import {} from 'react-icons/md'
import uniqid from 'uniqid'
const ScriptMenuLateral = [
    {
        status: 0,
        type: "menu",
        id: uniqid(),
        route: '',
        icon:  'system',
        text: 'dashboard'
    },
    {
        status: 0,
        type: "subMenu",
        id: uniqid(),
        route: 'adicionar',
        icon:  'add',
        subMenu: [
            {
                status: 3,
                id: uniqid(),
                route: 'administradora',
                icon:  '',
                text: 'administradora'
            },
            {
                status: 2,
                id: uniqid(),
                route: 'operadora',
                icon:  '',
                text: 'operadora'
            },
            {
                status: 2,
                id: uniqid(),
                route: 'plano',
                icon:  '',
                text: 'plano'
            }
        ],
        text: 'adicionar',
        configPage: [
            {
                label: 'plano',
                to: 'plano',
                id: uniqid(),
                config: [
                    {
                        id: 'plano',
                        type: 'text',
                        label: 'plano'
                    },
                    {
                        id: 'descricao',
                        type: 'text',
                        label: 'descrição'
                    },
                    {
                        id: 'idade',
                        type: 'number',
                        label: 'idade',
                    },
                    {
                        id: 'abrangencia',
                        type: 'text',
                        label: 'abrangência',
                    },
                    {
                        id: 'acomodacao',
                        type: 'text',
                        label: 'acomodação',
                    },
                    {
                        id: 'label',
                        type: 'text',
                        label: 'label'
                    },
                ]
                
            },
            {
                label: 'operadora',
                to: 'operadora',
                id: uniqid(),
                config: [
                    {
                        id: 'operadora',
                        type: 'text',
                        label: 'operadora'
                    },
                    {
                        id: 'descricao',
                        type: 'text',
                        label: 'descrição'
                    },
                    {
                        id: 'label',
                        type: 'text',
                        label: 'label'
                    },   
                ]
            },
            {
                label: 'administradora',
                to: 'administradora',
                id: uniqid(),
                config: [
                    {
                        id: 'administradora',
                        type: 'text',
                        label: 'administradora'
                    },
                    {
                        id: 'descricao',
                        type: 'text',
                        label: 'descrição'
                    },
                    {
                        id: 'operadora',
                        type: 'text',
                        label: 'operadora'
                    },
                    {
                        id: 'label',
                        type: 'text',
                        label: 'label'
                    },   
                ]
            }
        ]
    },
    {
        status: 2,
        type: "subMenu",
        id: uniqid(),
        route: 'gerenciar',
        icon:  'filterList',
        text: 'gerenciar',
        configPage: [],
        subMenu: [
            {
                status: 0,
                id: uniqid(),
                route: 'administradora',
                icon:  '',
                text: 'administradora'
            },
            {
                status: 0,
                id: uniqid(),
                route: 'operadora',
                icon:  '',
                text: 'operadora'
            },
            {
                status: 0,
                id: uniqid(),
                route: 'plano',
                icon:  '',
                text: 'plano'
            }
        ],
    },
    {
        status: 0,
        id: uniqid(),
        route: 'configurar',
        type: "subMenu",

        icon:  'setting',
        text: 'configuração',
        configPage: [],
        subMenu: [
            {
                status: 0,
                id: uniqid(),
                route: 'adicionar',
                icon:  '',
                text: 'segundo'
            }
        ],

    },
    {

    },
    
] 

export {ScriptMenuLateral}