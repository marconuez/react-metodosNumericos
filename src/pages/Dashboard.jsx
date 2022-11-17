import React from 'react'
import { NavLink } from 'react-router-dom'
import  marco  from '../img/Marco.png'
import  rafa  from '../img/Rafa.png'
import  Mcgregor  from '../img/Mcgregor.png'

export const Dashboard = () => {
  return (
    <>
     <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          <div className="w-full h-full rounded">
          <div className="contenedorDad">

        <br />
        <h2>Integrantes de métodos</h2>
        <hr /> 
        <br />
        <div className="contenedorCentro row row-cols-2 row-cols-md-3">
        {/* <img className='img' src={avatar} alt="icono" /> */}
        <div className="direccion animate__animated animate__slideInDown">
            <div className="blob">
                <div className="SubBlod">
                    <img className='img' src={marco} alt="icono" />
                </div>
            </div>
            <div>
                <div className='btn btn-dark pointer'>
                    <h3>Marco Nuñez Cabezas</h3>
                    <h4>Front-End</h4>
                </div>
            </div>
        </div>
        <div className="direccion animate__animated animate__slideInDown">
            <div className="blob">
                <div className="SubBlod">
                    <img className='img' src={rafa} alt="icono" />
                </div>
            </div>
            <div>
                <div className='btn btn-dark pointer'>
                    <h3>Rafael Molina</h3>
                    <h4>Front-End</h4>
                </div>
            </div>
        </div>
        <div className="direccion animate__animated animate__slideInDown">
            <div className="blob">
                <div className="SubBlod">
                    <img className='img' src={Mcgregor} alt="icono" />
                </div>
            </div>
            <div>
                <div className='btn btn-dark pointer'>
                    <h3>Johan McGregor</h3>
                    <h4>Back-End</h4>
                </div>
            </div>
        </div>
        </div>
        <hr />

        <ol className="list-group list-group-numbered">
        <li className="animate__animated animate__lightSpeedInLeft list-group-item d-flex justify-content-between align-items-start list-group-item-action">
            <div className="ms-2 me-auto">
                <div className="fw-bold texto">Método de Punto fijo <span>- Metodo Abierto</span></div>
            </div>
            <span className="btn badge bg-dark "><NavLink className="nav-item nav-link" to="/punto-fijo">calcular</NavLink></span>
        </li>
        <li className="animate__animated animate__lightSpeedInLeft list-group-item d-flex justify-content-between align-items-start list-group-item-action">
            <div className="ms-2 me-auto">
                <div className="fw-bold texto">Método de Newton-Raphson <span>- Metodo Abierto</span></div>
            </div>
            <span className="btn badge bg-dark "><NavLink className="nav-item nav-link" to="/newton">calcular</NavLink></span>
        </li>
        <li className="animate__animated animate__lightSpeedInLeft list-group-item d-flex justify-content-between align-items-start list-group-item-action">
            <div className="ms-2 me-auto">
                <div className="fw-bold texto">Método de Bisección <span>- Metodo cerrado</span></div>
            </div>
            <span className="btn badge bg-dark "><NavLink className="nav-item nav-link" to="/biseccion">calcular</NavLink></span>
        </li>
        <li className="animate__animated animate__lightSpeedInLeft list-group-item d-flex justify-content-between align-items-start list-group-item-action">
            <div className="ms-2 me-auto">
                <div className="fw-bold texto">Método de falsa posición <span>- Metodo cerrado</span></div>
            </div>
            <span className="btn badge bg-dark "><NavLink className="nav-item nav-link" to="/falsaPosicion">calcular</NavLink></span>
        </li>
        </ol>
        <br />
        </div>
          </div>
      </div>
    
    </>

  )
}





