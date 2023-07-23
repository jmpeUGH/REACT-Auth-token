import { useState } from "react";
import { useLocation } from "react-router-dom";

//Definimos la variable de estado del formulario para controlarlo

const initial_state = {
    email:"",
    password:""
}

const Login = ({loginUser,loginError})=>{

    //Para que podamos volver a una ruta previa después del hacer login, utilizamos Location
    //ESta location la recibimos de donde venimos (AuthRoutes)
    const location = useLocation()
    const {state} = location
    //console.log(location)

    //Ahora creamos la variable de estado "formData" que va a contener los datos del formulario
    //Modificaremos esta variable de estado cada vez que modifiquemos el formulario
    
    const [formData,setFormData] = useState(initial_state)

    const changeInput= (event)=>{
        // const valueInput = event.target.value
        // const nameInput = event.target.name
        //Esto de las líneas 23 y 24 se puede hacer como un destructuring
        //Al hacerlo, el nombre del destructuring debe de ser el nombre de las propiedades
        const {name,value} = event.target
        //Lo compruebo con un console.log
        console.log(name,value)
        //Ahora modificamos la variable de estado:
        //Para poder enviar las modificaciones, debemos utilizar el spreadOperator
       
        setFormData({...formData, [name]: value}) 
        //name indica la propiedad (email o password) que cambia y value, el nuevo valor
        //IMPORTANTE: PARA COMPROBAR EL FUNCIONAMIENTO DE LOS HOOK, HAY QUE HACERLO EN COMPONENTS EN VEZ DE EN CONSOLE

    }

    const submitForm =(ev)=>{
        ev.preventDefault()
        //Para comprobar:
        //console.log("Datos enviados")
        //En loginUser también tengo que enviarle el prevRoute del state para que me devuelva a donde estaba si no estaba en home
        console.log(formData)
        loginUser(formData, state ? state.prevRoute : null)
        //setFormData(initial_state)
    }

    return(
        //El formulario tiene el evento submitForm que define lo que hará cuando 
        //se clique el botón
        <form onSubmit={submitForm}>
            <label htmlFor="email">
                Email
            </label>
            <input type="email" name="email" id="email" onChange={changeInput} value={formData.email}/>
            {/* Para controlar los input, se hace asignando el valor de la variable de estado */}
            <label htmlFor="pass">
                Contraseña
            </label>
            <input type="password" name="password" id="pass" onChange={changeInput} value={formData.password}/>

            {/* Añado un div para que el botón salga en línea aparte */}
            <div>
                <button type="submit">Log in</button>
            </div>

            {loginError ? <div style={{ color: 'red' }}>{loginError}</div> : null}

        </form>
    )

}

export default Login;