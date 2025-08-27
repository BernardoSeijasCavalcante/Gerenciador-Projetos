import PropTypes from 'prop-types'

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

SayMyName.propTypes = {
    name: PropTypes.string.isRequired,
    resp: PropTypes.string,
    qualidade: PropTypes.string,
}

export default SayMyName