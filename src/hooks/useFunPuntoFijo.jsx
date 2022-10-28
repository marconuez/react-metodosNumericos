import React, { useState } from 'react'

export const useFunPuntoFijo = () => {
    
    const [calculos, setCalculos] = useState([]);
    const [iscalculosfull, setIscalculosfull] = useState(false);

    const [number, setNumber] = useState(
        {
            numeroIteraciones: '', 
            criterioTolerancia: '',
            IntervaloA: '',
            IntervaloB: ''
        }
    )

    const handleInput = (event) => {
        const { name, value } = event.target
        setNumber({...number, [name]: value})
    }

    const Fun = x => {
        const calculo = Math.exp(-x);
        return calculo
    }

    const puntoFijo = (event) => {
        setCalculos([])
        event.preventDefault();

        const { numeroIteraciones, criterioTolerancia } = number

        if(Number(numeroIteraciones) <= 0){
            console.log('el criterio de tolerancia no puede ser cero')
            return
        }
        else{
            let n;
            let ea;
            let es;
            let xi;
            let Ar;
            let gx;
                
            xi = 0;
            es = Number(criterioTolerancia); 
            Ar = 0;
            n = 1;
            gx = 0;
           
            do {
                gx = Fun(xi) //0 - 0
                ea = Math.abs((gx - Ar) / gx) * 100 //null - (0 - 0) / 0 * 100
                Ar = gx // 0 = 0
    
                const calc = {
                    n,
                    xi, 
                    gx,
                    ea
                }
                
                setCalculos(calculos =>[...calculos, calc])
                
                xi = gx //1
                n = n + 1
    
            } while (ea > es);  
            setIscalculosfull(true);
        }
    }

    return({
        calculos,
        iscalculosfull,
        number,
        setNumber,
        handleInput,
        puntoFijo
    })
}
export default useFunPuntoFijo;