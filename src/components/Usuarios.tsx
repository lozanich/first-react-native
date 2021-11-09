import {  User } from '../interfaces/reqRes.interface';
import { useUsers } from '../hooks/useUsers';

export const Usuarios = () => {

    const {usuarios, nextPage, beforePage} = useUsers()

    const renderItem = (user: User) => {
        return (
            <tr key={user.id.toString()}>
                <th>
                    <img src={user.avatar} alt={user.first_name} style={{
                        width: '50px',
                        borderRadius: '50%'
                    }}/>
                </th>
                <th>{user.first_name} {user.last_name}</th>
                <th>{user.email}</th>
            </tr>
        )
    }

    return (
        <>
         <h3>Usuarios</h3>   

         <table className="table">
             <thead>
                 <tr>
                     <th>Avatar</th>
                     <th>Nombre</th>
                     <th>Email</th>
                 </tr>
             </thead>

             <tbody>
                 {
                     usuarios.map(usuario =>  {
                        return renderItem(usuario);
                     })
                 }
             </tbody>
         </table>

        <button onClick={() => beforePage()} className='btn btn-primary'>Anterior</button>
         <button onClick={() => nextPage()} className='btn btn-primary'>Siguiente</button>
        </>
    )
}
