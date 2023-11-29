import { useState } from "react";
import { Input } from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {

  const {value: emailValue, handleInputChange: handleEmailChange, handleInputBur: handleEmailBlur, hasError: emailHasError} = useInput("", (value) => isEmail(value) && isNotEmpty(value))

  const {value: passwordValue, handleInputChange: handlePasswordChange, handleInputBur: handlePasswordBlur, hasError: passwordHasError} = useInput("", (value) => hasMinLength(value, 6 ))

  const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6)

  // se da una variable para el submit del formulario, dando el evento
  const handleSubmit = (event) => {

    // evita el evento por defecto
    event.preventDefault()

    if(emailHasError || passwordHasError) {
    
      return
    
    }
  
  }

  return (

    // damos el onSubmit 
    <form onSubmit={handleSubmit}>
      
      <h2>Login</h2>

      <div className="control-row">

        <Input 
          
          label="Email" 
          
          id="email" 
          
          name="email"

          onBlur={handleEmailBlur}
          
          // damos el evento y mandamos la variable del email y el evento del target que viene del valor
          onChange={handleEmailChange} 
          
          value={emailValue}

          error={emailHasError && "Please enter a valid email"}
          
        >

        </Input>

        <Input 
          
          label="Password" 
          
          id="password" 
          
          name="password"

          // damos el blur como funcion y le damos el identificador del email
          onBlur={handlePasswordBlur}
          
          // damos el evento y mandamos la variable del email y el evento del target que viene del valor
          onChange={handlePasswordChange} 
          
          value={passwordValue}

          error={passwordHasError && "Please enter a valid password"}
          
        >

        </Input>
        
    
      </div>

      <p className="form-actions">
        
        <button className="button button-flat">Reset</button>
        
        <button className="button" onClick={handleSubmit}>Login</button>
      
      </p>
    
    </form>
  
  );

}