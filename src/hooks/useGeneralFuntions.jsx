

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
    * Creation Date: 23/10/2022
    * Description: Method that evaluates the function according to the term it receives as parameter
    ************************************************************************************/
    const searchFuntion = (term, value) => {
        // validating the first term
        if (term.toLowerCase() === 'sin') {
            return sin(value);
        } else if (term.toLowerCase() === 'tan') {
            return tan(value);
        } else if (term.toLowerCase().includes("cos")) {
            return cos(value);
        } else if (term.toLowerCase().includes("sqr") || term.toLowerCase().includes("sqrt")) {
            return sqr(value);
        } else if (term.includes("e")) {
            if (term.includes("-")) {
                return exponential(-value);
            }
            else {
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
                newSecondValue = !isNaN(secondValue) ? -secondValue : value;
            } else {
                newSecondValue = !isNaN(secondValue) ? secondValue : value;
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

        firstValue = searchFuntion(leftTerm, value)
        secondValue = searchFuntion(rightTerm, value)

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
