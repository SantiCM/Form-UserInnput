import { useState } from "react"

export const useInput = (defaultValue, validationFn) => {
    
    const [enteredValue, setEnteredValue] = useState(defaultValue)

    const [didEdit, setDidEdit] = useState(false)

    const valueIsValid = validationFn(enteredValue)

    const handleInputChange = (event) => {

        setEnteredValue(event.target.value)

        setDidEdit(false)
  
    }


    const handleInputBur = () => {
        
        setDidEdit(true)
    
    }

    return {
    
        value: enteredValue,

        handleInputChange,

        handleInputBur,

        hasError: didEdit && !valueIsValid
    
    }

}