import {useState} from 'react'

function Condicional(){

    const [email,setEmail] = useState()
    const [userEmail, setUserEmail] = useState()


    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail(undefined)
        console.log(userEmail)
    }

    return(
        <div>
            <h2>Cadastre seu Email:</h2>
            <form>
                <input text="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}></input>
                 {userEmail &&(
                    <div>
                        <h2>O email do usuário é: {userEmail}</h2>
                        <button onClick={limparEmail}>Limpar Email!</button>
                    </div>
                 )}
            </form>
            <button onClick={enviarEmail}>Enviar Email!</button>
        </div>
    )
}

export default Condicional