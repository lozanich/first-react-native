import { useState } from "react"

export const useCounter = (inicial: number = 0) => {
    const [contador, setContador] = useState(0)

    const acumular = (numero: number) => { 
        setContador(contador + numero)
    }


    return {contador, acumular}
}
