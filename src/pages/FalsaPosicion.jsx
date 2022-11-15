import React, { useEffect, useState } from 'react'
import { HeaderBis } from '../components/HeaderBis';
import MessageError from '../components/MessageError';
import { TableBiseccion } from '../components/TableBiseccion';
import useFalsaPosicion from '../hooks/useFalsaPosicion';

export const FalsaPosicion = () => {

  const { calculos, iscalculosfull, number, setNumber, handleInput, FalsaPosicion, isError, errorMessage, setIsError } = useFalsaPosicion();
  useEffect(() => {
    if (!Number(number.numeroIteraciones <= 0)) {

      const valorNuevo = (0.5 * Math.pow(10, 2 - number.numeroIteraciones));
      setNumber({ ...number, criterioTolerancia: valorNuevo });
    }
  }, [number.numeroIteraciones])

  return (
    <>
      <div className={(calculos.length === 0) ? 'container mx-auto mt-5 animate__animated animate__fadeIn' : !!calculos ? ' mx-auto mt-5 animate__animated animate__fadeInRight ' : ''} >
        <div className='mt-12 mx-10 lg:flex '>
          <HeaderBis title='Método de Falsa Posición' number={number} handleInput={handleInput} funcion={FalsaPosicion} />
          {
            iscalculosfull && (
              <TableBiseccion calculos={calculos} />
            )
          }
        </div>
        {
          isError && (
            <MessageError errorMessage={errorMessage} setIsError={setIsError} />
          )
        }
      </div>
    </>
  )
}
// 