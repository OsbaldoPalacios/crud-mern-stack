import React, {useEffect, useState} from 'react';
import UsuarioIndividual from './UsuarioIndividual';
import axios from 'axios';

function ListaUsuarios(){

    const[dataUsuario, setDataUsuario] = useState([]);

    useEffect(() => {
        axios.get('/api/usuario/obtenerusuarios')
        .then(res => {
            console.log(res.data)
            setDataUsuario(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    //Mapear listadeusuario en objeto usuario
    const listausuarios = dataUsuario.map(usuario => {
        return(
            <div>
                <UsuarioIndividual usuario={usuario} />
            </div>
        )
    })

    return(
        <div>
            <h2>Lista de usuarios</h2>
            {listausuarios}
        </div>
    )
}

export default ListaUsuarios;