function SayMyName({name, resp, qualidade}){

    return(
        <>
            <p>Fala aí {name}, tudo bom?</p>
            <p>Como é que foi o seu dia?</p>
            <p>{resp}</p>
            <p>Caramba, isso é muito {qualidade}</p>
        </>
    )

}

export default SayMyName