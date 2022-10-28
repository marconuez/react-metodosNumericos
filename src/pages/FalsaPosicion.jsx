import React from 'react'
import { NavLink } from 'react-router-dom'

export const FalsaPosicion = () => {
  return (
    <div className='container mt-5 animate__animated animate__slideInLeft'>
        <br />
        <h1>Falsa Posición</h1>
        <hr />
        <br />
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Falsa Posicion - Ejemplo #1</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, velit ea iure, dolorem eius assumenda veniam amet enim omnis ullam repellat tempore dolore distinctio ducimus maiores! Neque dolorem nulla ab.</p>
                    <NavLink classNameName="nav-item nav-link" to="/FalsaPosicionEjemplo_1"><a href="#" className="btn btn-dark">Ir al ejemplo</a></NavLink>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Falsa Posicion - Ejemplo #2</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, velit ea iure, dolorem eius assumenda veniam amet enim omnis ullam repellat tempore dolore distinctio ducimus maiores! Neque dolorem nulla ab.</p>
                    <a href="#" className="btn btn-dark">Ir al ejemplo</a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
