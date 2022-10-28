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
        <div className='animate__animated mt-5 container animate__slideInLeft'>
            <div className="row">
                <div className="col">
                    <Header title='Método de Punto fijo' number={number} iscalculosfull={iscalculosfull} handleInput={handleInput} funcion={puntoFijo}/>

                </div>
            </div>
            
            {   
                iscalculosfull && 
                (
                    <div className="mt-5 table-responsive">
                        <Table calculos={calculos}/>

                    </div>
                )
            }

        </div>

    )
}
