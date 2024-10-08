import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const CrearFrases = () => {

    const valorInicial = {
        autor: "",
        cita: ""
    }

    let { id } = useParams()

    const [frase, setFrase] = useState(valorInicial)
    const [subId, setSubId] = useState(id)

    const capturarDatos = (e) => {
        const { name, value } = e.target
        setFrase({ ...frase, [name]: value })
    }
    const guardarDatos = async (e) => {
        e.preventDefault()
        //console.log(frase)
        //PETICION POST
        const newUser = {
            autor: frase.autor,
            cita: frase.cita
        }

        await axios.post("http://localhost:4000/api/frases", newUser)

        setFrase({ ...valorInicial })

    }

    //FUNCION para actualizar el usuario 

    const actualizarUser = async (e) => {
        e.preventDefault()
        const newUser = {
            autor: frase.autor,
            cita: frase.cita

        }
        await axios.put("http://localhost:4000/api/frases/" + subId, newUser)
        setFrase({ ...valorInicial })
        setSubId("")
    }

    //logica para hacer una peticion al api

    const obtUno = async (valorId) => {
        const res = await axios.get("http://localhost:4000/api/frases/" + valorId)
        setFrase({
            autor: res.data.autor,
            cita: res.data.cita
        })
    }

    useEffect(() => {
        if (subId !== "") {
            obtUno(subId)
        }
    }, [subId])

    return (
        <div className="col-md-6 offset-md-3">
            <div className="card card-body">
                <form onSubmit={guardarDatos}>
                    <h2 className="text-center mb-4">{id ? "Editar frase" : "Crear Frase"} </h2>
                    <div className="mb-3">
                        <label>
                            Autor:
                        </label>

                        <input type="text" className="form-control" placeholder="Ingrese el nombre del autor"
                            required
                            name="autor"
                            value={frase.autor}
                            onChange={capturarDatos}
                        />
                    </div>
                    <div className="mb-3">
                        <label>
                            Cita:
                        </label>

                        <input type="text" className="form-control " placeholder="Ingrese la cita del autor"
                            required
                            name="cita"
                            value={frase.cita}
                            onChange={capturarDatos} />
                    </div>
                    {!id &&  <button className="btn btn-primary form-control">
                        Guardar en lista de frases
                    </button>}
                   
                </form>

                <form onSubmit={actualizarUser}>
                {id &&  <button className="btn btn-primary form-control">
                        actualizar frase
                    </button>}
                    
                </form>

            </div>
        </div>
    )
}

export default CrearFrases