import React, { useState } from 'react'

export const useFunNewton = () => {
    
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

    const Fun1 = x => {
        const calculo = Math.exp(x-1) - 5 * Math.pow(x,3);
        // e^(x-1) - 5(x)^3
        return calculo
    }

    const Fun2 = x => {
        const calculo = Math.exp(x-1) - 15 * Math.pow(x,2);
        // e^(x-1)-15x^2
        return calculo
    }

    const Newton = (event) => {

        event.preventDefault();

        const { numeroIteraciones, criterioTolerancia } = number

        if(Number(criterioTolerancia) < 0){
            console.log('el criterio de tolerancia no puede ser cero')
            return
        }
        else{
            let n;
            let ea;
            let es;
            let xi;
            let Ar;
            let fx;
            let fdx;
            let xr;
                    
            xi = 0;
            es = Number(criterioTolerancia); 
            Ar = 0;
            n = 1;
            fx = 0;
            fdx = 0;
           
            do {
                fx = Fun1(xi);
                fdx = Fun2(xi);
                xr = xi - (fx / fdx);
                ea = Math.abs((xr - Ar) / xr) * 100;
                Ar = xr;
        
                const calc = {
                    n,
                    ea,
                    es,
                    xi,
                    Ar,
                    fx,
                    fdx,
                    xr
                }
                
                setCalculos(calculos =>[...calculos, calc])
        
                xi = xr;
                n = n + 1;
                
                if( n > 100){
                    break;
                }
    
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
        Newton
    })
}
export default useFunNewton;