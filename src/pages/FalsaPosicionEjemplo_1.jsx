import React, { useEffect } from 'react'
import { HeaderBis } from '../components/HeaderBis';
import { TableBiseccion } from '../components/TableBiseccion';
import useFalsaPosicion from '../hooks/useFalsaPosicion';

export const FalsaPosicionEjemplo_1 = () => {

  const {calculos, iscalculosfull, number, setNumber, handleInput, FalsaPosicion} = useFalsaPosicion();

  useEffect(() => {
    if(!Number(number.numeroIteraciones <= 0 )){

        const valorNuevo = (0.5* Math.pow(10, 2-number.numeroIteraciones));
        setNumber({...number, criterioTolerancia: valorNuevo});
    }
  }, [number.numeroIteraciones])
  
  return (
    <div className='container mt-5'>
    <HeaderBis title='Falsa Posición' number={number} handleInput={handleInput} funcion={FalsaPosicion}/>
   
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
