import React, { useEffect } from 'react'
import { Header, TableNewton } from '../components';
import useFunNewton from '../hooks/useFunNewton';

export const NewtonRaphson = () => {

    const { calculos, iscalculosfull, number, setNumber, handleInput, Newton } = useFunNewton();

    useEffect(() => {
        if (!Number(number.numeroIteraciones <= 0)) {

            const valorNuevo = (0.5 * Math.pow(10, 2 - number.numeroIteraciones));
            setNumber({ ...number, criterioTolerancia: valorNuevo });
        }
    }, [number.numeroIteraciones])

    return (
        <div className= {(calculos.length===0)? 'container mx-auto mt-5 animate__animated animate__fadeIn' : !!calculos ? ' mx-auto mt-5 animate__animated animate__fadeInRight ' : '' } >
            <div className='mt-12 mx-10 lg:flex'>
                <Header title='Método de Newton-Raphson' number={number} iscalculosfull={iscalculosfull} handleInput={handleInput} funcion={Newton} />
                {
                    iscalculosfull && (
                        <TableNewton calculos={calculos} />
                    )
                }
            </div>
        </div>
    )
}

