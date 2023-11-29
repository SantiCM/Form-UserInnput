import { useState } from "react";

export default function Login() {

  //const [enteredEmail, setenteredEmail] = useState("")

  //const [enteredPassword, setenteredPassword] = useState("")

  const [enteredValues, setEnteredValues] = useState({
  
    email: "",

    password: "",
  
  })

  // se da una variable para el submit del formulario, dando el evento
  const handleSubmit = (event) => {

    // evita el evento por defecto
    event.preventDefault()
  
    console.log("Useremail" + enteredEmail)

    // resetear el formulario al hacer el sing up
    setEnteredValues({
        
        email: "",

        password: "",
    
    })
  
  }

  const handleInputChange = (identifier, value) => {
  
    setEnteredValues(prevValues => ({
    
      ...prevValues,

      [identifier] : value
    
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
          
          <input id="email" type="email" name="email" onChange={(event) => handleInputChange("email", event.target.value)} value={enteredValues.email}/>
        
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