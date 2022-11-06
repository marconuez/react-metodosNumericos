import React, { useEffect } from 'react'
import { Header, Table} from '../components';
import { useFunPuntoFijo } from '../hooks/useFunPuntoFijo';

export const PuntoFijo = () => {

    const {calculos,iscalculosfull,number,setNumber,handleInput, puntoFijo} = useFunPuntoFijo();

    useEffect(() => {
        if(!Number(number.numeroIteraciones <= 0 )){

            const valorNuevo = (0.5* Math.pow(10, 2-number.numeroIteraciones));
            setNumber({...number, criterioTolerancia: valorNuevo});
        }
    }, [number.numeroIteraciones])
    
    return (
        <div className= {(calculos.length===0)? 'container mx-auto mt-5 animate__animated animate__fadeIn' : !!calculos ? ' mx-auto mt-5 animate__animated animate__fadeInRight ' : '' } >
            <div className='mt-12 mx-10 lg:flex  '>
                <Header title='Método de Punto fijo' number={number} iscalculosfull={iscalculosfull} handleInput={handleInput} funcion={puntoFijo} />
                {
                    iscalculosfull && (
                        <Table calculos={calculos} />
                    )
                }
            </div>
        </div>
    )
}

