
export const Funciones = () => {
    const sumar = (a: number, b: number): number => a + b;


    return (
        <>
          <h3>Funciones</h3>  
          <span>El resultado de sumar es: {sumar(1,2)}</span>
        </>
    )
}
