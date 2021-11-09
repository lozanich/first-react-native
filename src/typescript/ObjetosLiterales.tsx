// las interfaces en typescript solo sirven para definir un tipo de dato y colocarle reglas de validacion.

interface Persona { 
    nombre: string;
    edad: number;
    direccion: Direccion
}

interface Direccion { 
    pais: string;
    casaNo: number;
}


export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'Ivan',
        edad: 29,
        direccion: {
            pais: 'Mexico',
            casaNo: 20
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>  
            
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
