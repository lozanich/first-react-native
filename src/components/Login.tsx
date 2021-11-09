import {useEffect, useReducer} from 'react'

interface AuthState { 
    validate: boolean,
    token: string | null,
    username: string,
    name: string,
}

const initialState: AuthState = { 
    validate: true,
    token: null,
    username: '',
    name: ''
}

type LoginPayload = { username: string, name: string}

type AuthAction = 
    { type: 'logout'} | { type: 'login', payload: LoginPayload}



const authReducer = (state: AuthState, action: AuthAction): AuthState => { 
    switch (action.type) { 
        case 'logout':
            return {
                ...state,
                validate: false,
                token: null,
                name: '',
                username: ''
             }
        case 'login':
            return { 
                ...state,
                validate: false,
                token: 'spua82',
                name: action.payload.name,
                username: action.payload.username
            }

        default: 
            return state
    }
}


export const Login = () => {
    const [{validate, token, name}, dispatch] = useReducer(authReducer, initialState)
    

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})    
        }, 1500);
    }, [])



    const login = () => {
        dispatch({type: 'login', payload: {username: 'lozanich', name: 'Ivan Lozano'}})
    }

    const logout = () => { 
        dispatch({type: 'logout'})
    }

    if(validate) { 
        return (
            <>
                <h1>Login</h1>
                 <div className="alert alert-info">
                Validando..
            </div>
            </>
        )
    }


    return (
        <>
            <h3>Login</h3>   

            {
                !token 
                ? <div className="alert alert-danger"> No autenticado.. </div>
                : <div className="alert alert-success"> Autenticado como {name}</div>
            }

            {
                token
                ? <button onClick={logout} className="btn btn-danger">Logout</button>
                : <button onClick={login} className="btn btn-primary">Login</button>
            }
            
        </>
    )
}
