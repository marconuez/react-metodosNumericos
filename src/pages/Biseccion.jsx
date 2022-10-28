import React, { useEffect, useState } from 'react'
import { HeaderBis } from '../components/HeaderBis'
import { TableBiseccion } from '../components/TableBiseccion'
import useFunBiseccion from '../hooks/useFunBiseccion'

export const Biseccion = () => {

    const {calculos,iscalculosfull,number,setNumber,handleInput, bisection} = useFunBiseccion();

    useEffect(() => {
        if(!Number(number.numeroIteraciones <= 0 )){

            const valorNuevo = (0.5* Math.pow(10, 2-number.numeroIteraciones));
            setNumber({...number, criterioTolerancia: valorNuevo});
        }
    }, [number.numeroIteraciones])

    return (
        <div className='container mt-5 animate__animated animate__slideInLeft'>
            <HeaderBis title='Bisección' number={number} handleInput={handleInput} funcion={bisection}/>
           
            {
                iscalculosfull && (
                    <div className='table-responsive'>
                        <TableBiseccion calculos={calculos} />
                    </div>
                )
            }

        </div>
    )
}
