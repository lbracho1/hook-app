import { useEffect } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustonHook = () => {
  
    const { onResetForm, formState, onInputChange, username, email, pasword } = useForm({
            username: '',
            email: '',
            pasword: ''
        });

    // const { username, email, pasword } = formState;

     
   return (
    <>
        <h1>Formulario con custon hook</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        
        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="email.mail@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

         <input 
            type="pasword" 
            className="form-control mt-2"
            placeholder="Contraseña"
            name="pasword"
            value={ pasword }
            onChange={ onInputChange }
        />
      

      <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
       
    </>
  )
};
