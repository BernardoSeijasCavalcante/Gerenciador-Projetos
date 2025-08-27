function OutraLista({itens}){
    return (
        <>
            <h3>Lista de Coisas Boas</h3>
            {itens.length > 0 ? (
                itens.map((item, i) => <p key={i}>{item}</p>)
                ) : (
                    <p>Não há itens na Lista!</p>
                )
            }
        </>
    )
}

export default OutraLista