import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Metodos Numericos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Funciones</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>


                <div className="offcanvas-body">
                    <div className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                        <li className="nav-item">
                            <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                <NavLink className="nav-item nav-link" to="/">Dashboard</NavLink>
                            </nav>
                        </li>
                        <li className="nav-item">
                            <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                <NavLink className="nav-item nav-link" to="/punto-fijo">Punto Fijo</NavLink>
                            </nav>
                        </li>
                        <li className="nav-item">
                            <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                <NavLink className="nav-item nav-link" to="/newton">Newton Raphson</NavLink>
                            </nav>
                        </li>
                        <li className="nav-item">
                            <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                <NavLink className="nav-item nav-link" to="/biseccion">Bisección</NavLink>
                            </nav>
                        </li>
                        <li className="nav-item">
                            <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                <NavLink className="nav-item nav-link" to="/falsaPosicion">Falsa Posición</NavLink>
                            </nav>
                        </li>
                    </div>
                </div>
                </div>
            </div>
            </nav>
    )
}
