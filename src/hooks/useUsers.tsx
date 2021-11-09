import { useEffect, useRef, useState } from 'react';
import { User, ReqResListado } from '../interfaces/reqRes.interface';
import { reqResApi } from '../api/reqRes';


export const useUsers = (initial: number = 1) => {

    const [usuarios, setUsuarios] = useState<User[]>([])
    const pageRef = useRef(1)


    useEffect(() => {
       // Llamar a la API
       loadUsers(initial)
    }, [initial])

    const loadUsers = async(number: number) => { 
        console.log(pageRef.current);
        const response = await reqResApi.get<ReqResListado>('/users', {
            params: { 
                page: pageRef.current
            }
        })

        if(response.data.data.length > 0){ 
            setUsuarios(response.data.data);
        } else {
            alert('No hay mas usuarios')
        }
    }

    const nextPage = () => { 
        pageRef.current++
        loadUsers(pageRef.current)
    }

    const beforePage = () => { 
        if(pageRef.current > 1){
            pageRef.current--
            loadUsers(pageRef.current)
        }
    }

    return { 
        usuarios,
        nextPage,
        beforePage
    }    
}
