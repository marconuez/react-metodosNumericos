import React, { useEffect } from 'react'
import { Header, TableNewton } from '../components';
import useFunNewton from '../hooks/useFunNewton';

export const NewtonRaphson = () => {

    const {calculos,iscalculosfull,number,setNumber,handleInput, Newton} = useFunNewton();

    useEffect(() => {
        if(!Number(number.numeroIteraciones <= 0 )){

            const valorNuevo = (0.5* Math.pow(10, 2-number.numeroIteraciones));
            setNumber({...number, criterioTolerancia: valorNuevo});
        }
    }, [number.numeroIteraciones])

    return (
        <div className='animate__animated mt-5 container animate__slideInLeft'>
            <Header title='Método de Newton-Raphson'  number={number} iscalculosfull={iscalculosfull} handleInput={handleInput} funcion={Newton}/>

            {
                iscalculosfull && (
                    <div className='table-responsive'>
                        <TableNewton calculos={calculos}/>
                    </div>
                )
            
            }

        </div>

    )
}
