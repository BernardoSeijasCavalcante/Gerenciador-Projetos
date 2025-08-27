function Evento(){

    function meuEvento(){
        console.log("Opa! Tudo bom?")
    }

    return (
        <>
        <button onClick={meuEvento}>Clique Aqui!</button>
        </>
    )
}

export default Evento