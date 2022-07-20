import uniqid from "uniqid";

export const scriptGlobal = 
{
    version: '20220720',
    dev: [
        {
            name: 'henrique de lima pessoa',
            id: uniqid(),
            email: 'henriquedelimap@hotmail.com',
            avatarId: '',
            user: 'henriquedelimap',
            password: '123',
            idade: 22,
            license:"developer",
            lps: 0.0,
            admin:true,
            dateTime: 1310654350393,
            archived: false,
            invited: false,
            licensed: true,
            locked: false,
            businessUnit: { 
                id: "100000", 
                name: "development" 
            },  
        }
    ],
    users: [
        {
            name: 'felipe marques muniz',
            id: uniqid(),
            email: 'felipemarquehi@hotmail.com',
            avatarId: '',
            user: 'felipemmuniz',
            password: '123',
            idade: 26,
            license:"user",
            lps: 0.0,
            admin:false,
            dateTime: 1310654350393,
            archived: false,
            invited: true,
            licensed: true,
            locked: false,
            businessUnit: { 
                id: "000001", 
                name: "dolls4collector" 
            },  
        },
        {
            name: 'luciano mizael',
            id: uniqid(),
            email: 'lucianomizael@hotmail.com',
            avatarId: '',
            user: 'lucianomizael',
            password: '123',
            idade: 26,
            license:"user",
            lps: 0.0,
            admin:false,
            dateTime: 1310654350393,
            archived: false,
            invited: true,
            licensed: true,
            locked: false,
            businessUnit: { 
                id: "000002", 
                name: "lrm saúde" 
            },  
        }
    ]
}
    


