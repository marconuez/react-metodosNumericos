

const useGeneralFuntions = () => {

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 05/11/2022
    * Description: Method that calculates an sqr function
    ************************************************************************************/
    const sin = (x) => {
        return Math.sin(x)
    }

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 05/11/2022
    * Description: Method that calculates an sqr function
    ************************************************************************************/
    const tan = (x) => {
        return Math.tan(x)
    }

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 23/10/2022
    * Description: Method that calculates an sqr function
    ************************************************************************************/
    const sqr = (x) => {
        return Math.sqrt(x)
    }

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 23/10/2022
    * Description: Method that calculates an cos function
    ************************************************************************************/
    const cos = (x) => {
        return Math.cos(x)
    }

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 23/10/2022
    * Description: Method that calculates an exponential function
    ************************************************************************************/
    const exponential = (x) => {
        return Math.exp(x)
    }

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 23/10/2022
    * Description: Method that calculates an Natural Logarithm function
    ************************************************************************************/
    const naturalLogarithm = (x) => {
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
    * Creation Date: 14/11/2022
    * Description: Method that calculates a resta function
    ************************************************************************************/
    const resta = (term) => {
        let valuesArray = term.replace("(", "").replace(")", "").split("-");

        if (valuesArray.length > 0) {
            let firstValue, secondValue = 0;

            firstValue = parseFloat(valuesArray[0]);
            secondValue = parseFloat(valuesArray[1]);

            if(isNaN(firstValue)) {
                firstValue = 0;
            }

            if(isNaN(secondValue)){
                secondValue = 0;
            }
        
            return firstValue - secondValue;
        }
        return term;
    }

    // e^(x-1) - 5(x)^3

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 14/11/2022
    * Description: Method that calculates a suma function
    ************************************************************************************/

    const suma = (term) => {
        let valuesArray = term.replace("(", "").replace(")", "").split("+");
        if (valuesArray.length > 0) {
            let firstValue, secondValue = 0;

            firstValue = parseFloat(valuesArray[0]);
            secondValue = parseFloat(valuesArray[1]);

            if(isNaN(firstValue)) {
                firstValue = 0;
            }

            if(isNaN(secondValue)){
                secondValue = 0;
            }

            return firstValue + secondValue;
        }
        return term;
    }

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 14/11/2022
    * Description: Method that calculates a division function
    ************************************************************************************/
    const division = (term) => {
        let valuesArray = term.replace("(", "").replace(")", "").split("/");
        if (valuesArray.length > 0) {
            let firstValue, secondValue = 0;

            firstValue = parseFloat(valuesArray[0]);
            secondValue = parseFloat(valuesArray[1]);

            return firstValue / secondValue;
        }
        return term;
    }

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 14/11/2022
    * Description: Method that calculates a multiplicacion function
    ************************************************************************************/

    const multiplicacion = (term) => {
        let valuesArray = term.replace("(", "").replace(")", "").split("*");
        if (valuesArray.length > 0) {
            let firstValue, secondValue = 0;

            firstValue = parseFloat(valuesArray[0]);
            secondValue = parseFloat(valuesArray[1]);

            return firstValue * secondValue;
        }
        return term;
    }

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 14/11/2022
    * Description: Method that validate Operations function
    ************************************************************************************/
    const validateOperation = (term) => {
        if (term.includes('/')) {
            return division(term)
        } else if (term.includes('*')) {
            return multiplicacion(term);
        } else if (term.includes('-')) {
            return resta(term);
        } else if (term.includes('+')) {
            return suma(term);
        }

        return term;
    }

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 23/10/2022
    * Description: Method that evaluates the function according to the term it receives as parameter
    ************************************************************************************/
    const searchFuntion = (term, value) => {
        // validating the first term
        if (term.toLowerCase().includes("sin")) {
            return sin(value);
        } else if (term.toLowerCase().includes("tan")) {
            return tan(value);
        } else if (term.toLowerCase().includes("cos")) {
            return cos(value);
        } else if (term.toLowerCase().includes("sqr") || term.toLowerCase().includes("sqrt")) {
            return sqr(value);
        } else if (term.includes("e")) {
            let newValue = term.replace("(", "").replace(")", "").replace('x', value).split('^')[1];
            let result = 0;

            if (newValue.includes('-') || newValue.includes('+') || newValue.includes('*') || newValue.includes('/')) {
                result = exponential(resta(newValue));
            } else {
                result = exponential(newValue);
            }
            return result;
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
                newSecondValue = !isNaN(secondValue) ? -secondValue : value;
            } else {
                newSecondValue = !isNaN(secondValue) ? secondValue : value;
            }
            return power(newFirtsValue, newSecondValue);
        } else if (term.includes("/")) {
            let valuesArray = term.replace("(", "").replace(")", "").split("/");
            let firstValue, secondValue = 0;

            firstValue = valuesArray[0].replace('x', value);
            secondValue = valuesArray[1].replace('x', value);


            return validateOperation(firstValue) / validateOperation(secondValue);
        } else if (term.includes("*")) {
            let valuesArray = term.replace("(", "").replace(")", "").split("*");

            let firstValue, secondValue = 0;

            firstValue = !isNaN(valuesArray[0]) ? parseFloat(valuesArray[0]) : parseFloat(value);
            secondValue = !isNaN(valuesArray[1]) ? parseFloat(valuesArray[1]) : parseFloat(value);
            return firstValue * secondValue;
        }
        else if (term.includes("+")) {
            let valuesArray = term.replace("(", "").replace(")", "").split("+");
            let firstValue, secondValue = 0;

            firstValue = !isNaN(valuesArray[0]) ? parseFloat(valuesArray[0]) : parseFloat(value);
            secondValue = !isNaN(valuesArray[1]) ? parseFloat(valuesArray[1]) : parseFloat(value);

            return firstValue + secondValue;
        } else if (term.includes("-")) {
            return resta(term);
        }
    }

    /************************************************************************************
    * Author: Johan McGregor
    * Creation Date: 23/10/2022
    * Description: Method that calculates the values ​​of the function
    ************************************************************************************/
    const validateFunction = (rightTerm, leftTerm, operator, value) => {

        let firstValue, secondValue;

        firstValue = searchFuntion(rightTerm, value);
        secondValue = searchFuntion(leftTerm, value);

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

    return ({
        validateFunction
    })
}

export default useGeneralFuntions
