import React, { useState } from 'react'

export const useFunBiseccion = () => {
    
    const [calculos, setCalculos] = useState([]);
    const [iscalculosfull, setIscalculosfull] = useState(false);

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
        setNumber({...number, [name]: value})
    }

    /************************************************************************************
 * Author: Johan McGregor
 * Creation Date: 23/10/2022
 * Description: Method that calculates an exponential function
 ************************************************************************************/
    const exponential = (x) =>{
        return Math.exp(x)
    }
  
  /************************************************************************************
   * Author: Johan McGregor
   * Creation Date: 23/10/2022
   * Description: Method that calculates an Natural Logarithm function
   ************************************************************************************/
  const naturalLogarithm = (x) =>{
    return Math.log(x)
  }
  
  /************************************************************************************
   * Author: Johan McGregor
   * Creation Date: 23/10/2022
   * Description: Method that computes a power function
   ************************************************************************************/
  const power = (base, elevation) => {
    return Math.pow(base, elevation)
  }
  
  /************************************************************************************
   * Author: Johan McGregor
   * Creation Date: 23/10/2022
   * Description: Method that evaluates the function according to the term it receives as parameter
   ************************************************************************************/
  const searchFuntion = (term, value) => {
    // validating the first term
    if (term.includes("e")) {
      if (term.includes("-")) {
        return exponential(-value);
      } else {
        return exponential(value);
      }
    } else if (term.includes("ln")) {
      if (term.includes("-")) {
        return naturalLogarithm(-value);
      } else {
        return naturalLogarithm(value);
      }
    } else if (term.includes("^")) {

      let values = term.split("^");
      let newFirtsValue, newSecondValue, secondValue;
      secondValue = values[1].replace("(", "").replace(")", "");

      if (values[0].includes("-")) {
        newFirtsValue = !isNaN(values[0]) ? -values[0] : value;
      } else {
        newFirtsValue = !isNaN(values[0]) ? values[0] : value;
      }

      if (values[1].includes("-")) {
        newSecondValue = !isNaN(secondValue)? -secondValue : value;
      } else {
        newSecondValue = !isNaN(secondValue)? secondValue : value;
      }
      return power(newFirtsValue, newSecondValue);
    }
  }
  
  /************************************************************************************
   * Author: Johan McGregor
   * Creation Date: 23/10/2022
   * Description: Method that calculates the values ​​of the function
   ************************************************************************************/
  const validateFunction = (rightTerm, leftTerm, operator, value) => {
  
    let firstValue, secondValue;
  
    firstValue = searchFuntion(rightTerm, value)
    secondValue = searchFuntion(leftTerm, value)
  
    switch (operator) {
      case '-':
        return firstValue - secondValue;
      case '+':
        return firstValue + secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        throw new ("Operación no soportada")
    }
  
  }
  
    //McGregor Creado 24-10-2022
    // Description: Method that calculates the values ​​of the function
   const bisection = (event) => {
        event.preventDefault();
        const {funcionString, IntervaloA, IntervaloB} = number;

        // The criteria are separated
        let valueArray = funcionString.split(")");
        
        // The operation between the 2 criteria is obtained
        let operator = valueArray[1][0];
        
        // We obtain the criterion on the right of the operator
        let rightTerm = valueArray[0].concat(")");
        
        // We obtain the criterion on the left of the operator
        let leftTerm = valueArray[1].concat(")").slice(1, 10000);

        let a, b, n, es, ea, xr, Ar, ff, fa, fb,fx;
        let obj = new Array();
    
        n = 1;
        a = Number(IntervaloA);
        b = Number(IntervaloB);
        es = 0.5 * Math.pow(10, (2 - number.numeroIteraciones));
        Ar = 0;
    
        if (validateFunction(rightTerm, leftTerm, operator, a) * validateFunction(rightTerm, leftTerm, operator, b) < 0) {
        do {
            // Evaluate in function
            xr = (a + b) / 2;
            fa = validateFunction(rightTerm, leftTerm, operator, a);
            fb = validateFunction(rightTerm, leftTerm, operator, b);
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
            setCalculos(calculos =>[...calculos, obj]);
    
    
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
    
        // console.table(obj);
  
    } else {
      console.log("Error, f(x) Discontinua o no hay raíces en el intervalo dado.")
    }
  }

    return({
        calculos,
        iscalculosfull,
        number,
        setNumber,
        handleInput,
        // calcular_con_metodo_de_biseccion,
        bisection
    })

}


export default useFunBiseccion;
