import { useState } from "react";

import '../styles/Appointment.css'

function Appointment() {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [modelo, setModelo] = useState('')
    const [problema, setProblema] = useState('')
    const [mensagem, setMensagem] = useState('')

     async function enviarFormulario(e) {

        e.preventDefault()

        console dados = { 
            nome,
            telefone,
            modelo,
            problema
        }
        
        const resposta = await fetch(
            "http://localhost:8080/agendamentos",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            }
        )

        if (resposta.ok) {
             setMensagem('Agendamento enviado com sucesso!')
        }
    }

    return (

        <section className="appointment">

            <div className="container">

                <h2>
                    Agende seu Conserto
                </h2>

                <form onSubmit={enviarFormulario}>

                    <input
                        type="text"
                        placeholder="Seu Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    
                    <input
                        type="text"
                        placeholder="Telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                    
                    <input
                        type="text"
                        placeholder="Modelo"
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value)}
                    />

                    <textarea
                        type="text"
                        placeholder="Descreva o problema"
                        value={problema}
                        onChange={(e) => setProblema(e.target.value)}
                    ></textarea>

                    <button type="submit">
                        Enviar Agendamento
                    </button>

                    {mensagem && (
                        <p className="sucess-message">
                            {mensagem}
                        </p>
                    )}

                </form>

            </div>

        </section>

    )


}

export default Appointment