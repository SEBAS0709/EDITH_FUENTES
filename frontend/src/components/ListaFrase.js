import React, { useEffect, useState } from "react"
import axios from "axios"

import { Link } from "react-router-dom"

const ListaFrase = () => {

    const [lista, setLista] = useState([])
    
    useEffect(() => {
        const getFrases = async() => {
            const res= await axios.get("http://localhost:4000/api/frases")
            setLista(res.data)
        }
        getFrases()
    }, [])
    
    const eliminarFrase = async(id) => {
        await axios.delete("http://localhost:4000/api/frases/" + id)
    }

    return (
        <div className="row">
{
    lista.map(list => (
        <div className="col-md-4 p-2" key={list._id}>
            <div className="card">
                <div className="card-header">
                    <h5> Autor de la frase: {list.autor}</h5>
                </div>
                <div className="card-body"> 
                    <p>"{list.cita}"</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={() =>eliminarFrase(list._id)}>
                            eliminar frase 
                        </button>

                    <Link className="btn btn-primary m-1" to={"/edit/" + list._id}>
                        editar frase
                    </Link>
            </div>
            </div>
             </div>
    ))
}           
        </div>
    )
}

export default ListaFrase