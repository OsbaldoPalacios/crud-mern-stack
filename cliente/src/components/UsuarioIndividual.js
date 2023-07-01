import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';

function UsuarioIndividual({usuario}){

    const navegar = useNavigate();

    //Para animación de scroll al bajar
    useEffect(() => {
        AOS.init()
    },[])

    const borrarusuario = (iduasuario) => {
        axios.post('/api/usuario/borrarusuario', {idusuario: iduasuario})
        .then(res => {
            Swal.fire('Bien', "El usuario se eliminó con exito")
            navegar(0)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return(
        <div className="container">
            <div className='row'>

                <div className='col-sm-6 offset-3' data-aos="flip-right">
                    <ul className='list-group'>
                        <li className="list-group-item">{usuario.idusuario}</li>
                        <li className="list-group-item">{usuario.nombre}</li>
                        <li className="list-group-item">{usuario.email}</li>
                        <li className="list-group-item">{usuario.telefono}</li>
                    </ul>
                    <Link to={`/editarusuario/${usuario.idusuario}`}><li className='btn btn-success'>Editar</li></Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={() => {borrarusuario(usuario.idusuario)}}>Borrar</button>
                    <hr className='mt-4'/>
                </div>

            </div>
        </div>
    )
}

export default UsuarioIndividual;