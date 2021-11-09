
export const TiposBasicos = () => {

    let nombre: string | number = "Ivan";
    nombre =123;

    const edad: number = 29;
    const isActive: boolean = true;
    const powers: string[] = ["Super Aliento", "Super Fuerza", "Super Velocidad"];

    return (
        <>
            <h3>Tipos básicos</h3>  
            {nombre}, {edad}, {isActive ? "Activo" : "Inactivo"}
            <hr />

            {powers.map((power, index) => <li key={index}>{power}</li>)}
        </>
    )
}
