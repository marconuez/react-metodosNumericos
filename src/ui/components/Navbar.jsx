import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Métodos Numéricos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Métodos</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>


                    <div className="offcanvas-body">
                        <div className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                            <li className="nav-item">
                                <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                    <NavLink className="nav-item nav-link text-left p-2" to="/">Dashboard</NavLink>
                                </nav>
                            </li>
                            <li className="nav-item">
                                <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                    <NavLink className="nav-item nav-link text-left p-2" to="/punto-fijo">Método de Punto Fijo</NavLink>
                                </nav>
                            </li>
                            <li className="nav-item">
                                <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                    <NavLink className="nav-item nav-link text-left p-2" to="/newton">Método de Newton Raphson</NavLink>
                                </nav>
                            </li>
                            <li className="nav-item">
                                <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                    <NavLink className="nav-item nav-link text-left p-2" to="/biseccion">Método de Bisección</NavLink>
                                </nav>
                            </li>
                            <li className="nav-item">
                                <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                    <NavLink className="nav-item nav-link text-left p-2" to="/falsaPosicion">Método de Falsa Posición</NavLink>
                                </nav>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
