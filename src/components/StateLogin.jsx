import { useState } from "react";

export default function StateLogin() {

  //const [enteredEmail, setenteredEmail] = useState("")

  //const [enteredPassword, setenteredPassword] = useState("")

  // damos un estado para el form que da el email y el password
  const [enteredValues, setEnteredValues] = useState({
  
    email: "",

    password: "",
  
  })

  // damos un estado de edit donde el email y el password estan en falso
  const [didEdit, setDidEdit] = useState({
  
    email: false,

    password: false
  
  })

  // si el email es valido es igual a la edit del email que sea true y si el valor entero es contrario del email y que incluya el arroba
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@")

  // se da una variable para el submit del formulario, dando el evento
  const handleSubmit = (event) => {

    // evita el evento por defecto
    event.preventDefault()
  
    // resetear el formulario al hacer el sing up
    /*setEnteredValues({
        
      email: "",

      password: "",
    
    })*/
  
  }

  // variable para el change del input
  // damos el valor y el identificador
  const handleInputChange = (identifier, value) => {
    
    // damos el segundo estado de los valores como una funcion
    setEnteredValues(prevValues => ({
      
      // damos la copia
      ...prevValues,

      // y el identificador como array es igual al valor
      [identifier] : value
    
    }))

    // el editar viene de la funcion
    setDidEdit((prevEdit) => ({
      
      // damos la copia
      ...prevEdit,

      // y el identificador como array es igual a false
      [identifier]: false
        
    }))
  
  }

  // variable del input para la propiedad del bur
  const handleInputBur = (identifier) => {
        
    setDidEdit((prevEdit) => ({
      
      // damos la copia
      ...prevEdit,

      // y el identificador como array es igual a true
      [identifier]: true
        
    }))
    
  }

  /*const handleEmailChange = (event) => {
  
    setenteredEmail(event.target.value)
  
  }

  const handlePasswordChange = (event) => {
  
    setenteredPassword(event.target.value)
  
  }*/
  
  return (

    // damos el onSubmit 
    <form onSubmit={handleSubmit}>
      
      <h2>Login</h2>

      <div className="control-row">
        
        <div className="control no-margin">
          
          <label htmlFor="email">Email</label>
          
          <input 
          
            id="email" 
            type="email" 
            name="email"
            // damos el blur como funcion y le damos el identificador del email
            onBlur={() => handleInputBur("email")}
            // damos el evento y mandamos la variable del email y el evento del target que viene del valor
            onChange={(event) => handleInputChange("email", event.target.value)} 
            value={enteredValues.email}/>

            <div className="control-error">

              {emailIsInvalid && <p>Please enter a valid email adrress</p>}

            </div>

        </div>

        <div className="control no-margin">
          
          <label htmlFor="password">Password</label>
          
          <input id="password" type="password" name="password" onChange={(event) => handleInputChange("password", event.target.value)} value={enteredValues.password}/>
        
        </div>
      
      </div>

      <p className="form-actions">
        
        <button className="button button-flat">Reset</button>
        
        <button className="button" onClick={handleSubmit}>Login</button>
      
      </p>
    
    </form>
  
  );

}