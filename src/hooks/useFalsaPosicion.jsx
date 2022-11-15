import React, { useState } from 'react'
import useGeneralFuntions from '../hooks/useGeneralFuntions';

export const useFalsaPosicion = () => {

  const { validateFunction } = useGeneralFuntions();

  const [calculos, setCalculos] = useState([]);
  const [iscalculosfull, setIscalculosfull] = useState(false);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [number, setNumber] = useState(
    {
      funcionString: '',
      numeroIteraciones: '',
      criterioTolerancia: '',
      IntervaloA: '',
      IntervaloB: ''
    }
  )

  const handleInput = (event) => {
    const { name, value } = event.target
    setNumber({ ...number, [name]: value })
  }


  const FalsaPosicion = (event) => {
    event.preventDefault();
    setErrorMessage('')
    setIsError(false);
    const { funcionString, IntervaloA, IntervaloB } = number;

    let newFuncionString = funcionString.trim().replace(/ /g, "");

    // The criteria are separated
    let valueArray = newFuncionString.split(")");

    // The operation between the 2 criteria is obtained
    let operator = valueArray[1][0];

    // We obtain the criterion on the right of the operator
    let rightTerm = valueArray[0].concat(")");

    // We obtain the criterion on the left of the operator
    let leftTerm = valueArray[1].concat(")").slice(1, 10000);

    let a, b, n, es, ea, xr, Ar, ff, fa, fb, fx;
    let obj = new Array();

    n = 1;
    a = Number(IntervaloA);
    b = Number(IntervaloB);
    es = 0.5 * Math.pow(10, (2 - number.numeroIteraciones));
    Ar = 0;

    if (validateFunction(rightTerm, leftTerm, operator, a) * validateFunction(rightTerm, leftTerm, operator, b) < 0) {
      do {
        // Evaluate in function
        fa = validateFunction(rightTerm, leftTerm, operator, a);
        fb = validateFunction(rightTerm, leftTerm, operator, b);
        xr = b - (fb * (a - b)) / (fa - fb);
        fx = validateFunction(rightTerm, leftTerm, operator, xr);
        ff = fa * fx;
        ea = Math.abs((xr - Ar) / xr) * 100

        const obj = {
          n,
          a,
          b,
          xr,
          fa,
          fb,
          fx,
          ff,
          ea
        };
        setCalculos(calculos => [...calculos, obj]);

        if (ff == 0) {
          break;
        };

        if (ff < 0) {
          b = xr;
        } else {
          a = xr;
        }

        Ar = xr;
        n++;

      } while (ea > es);
      setIscalculosfull(true);
    } else {
      console.log("Error, f(x) Discontinua o no hay raíces en el intervalo dado.")
      setErrorMessage("Error, f(x) Discontinua o no hay raíces en el intervalo dado.")
      setIsError(true);
    }
  }

  return ({
    calculos,
    iscalculosfull,
    number,
    setNumber,
    handleInput,
    FalsaPosicion,
    isError,
    errorMessage,
    setIsError
  })
}

export default useFalsaPosicion;
