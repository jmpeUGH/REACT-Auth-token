import { useState } from "react"


const initial_state={
    email:"",
    password:"",
    name:"",
    role:""
}

const RegisterUser = ({registerNewUser, registerDup}) => {

    const [newUser,setnewUser] = useState(initial_state)

    const changeInput = (event)=>{

        const {id, value} = event.target
        setnewUser({...newUser, [id]:value})

    }

    const submitForm =(event)=>{
        event.preventDefault()
        registerNewUser(newUser)
    }

  return (
    <>
    <form onSubmit={submitForm}>
        <label htmlFor="email">
                Email
            </label>
        <input type="email" name="email" id="email" value={newUser.email} onChange={changeInput}/>
        <label htmlFor="password">
                Contraseña
            </label>
        <input type="password" name="password" id="password" value={newUser.password} onChange={changeInput}/>
        <label htmlFor="name">
                Nombre
            </label>
        <input type="name" name="name" id="name" value={newUser.name} onChange={changeInput}/>
        <select name="role" id="role" value={newUser.role} onChange={changeInput}>
            <option value="">Seleccione</option>
            <option value="admin">Admin</option>
            <option value="user">Usuario</option>
        </select>
        <button type="submit">Registrar</button>
    </form>
    {registerDup ? <p style={{color:"red"}}>{registerDup}</p> : null}
    </>
  )
}

export default RegisterUser