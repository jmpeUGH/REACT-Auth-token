//import logo from '../images/logo.svg';
import '../styles/App.css';
import Home from "./Home/Home"
// import Contact from "./Contact/Contact"
import NotFound from './NotFound';
// import ProductDetail from './Product/ProductDetail';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import { useState } from 'react';
import Profile from './Profile/Profile';
import AuthRoutes from './AuthRoutes/AuthRoutes';
import RegisterUser from './User/RegisterUser';
import {API} from '../services/api';
import Check from './Check';


/*
0. Crear un NavBar
1. Creamos formulario de login
2. Creo un array de usuarios
3. Comprobar si los datos de login coinciden con los usuarios del array
4. Si coinciden, creamos(logueamos) al usuario, mediante variable de estado con sus datos
5. Crear componente que va a validar el usuario. Para no validar cada vez
6. Crear el componente Profile (perfil de usuario como ruta privada)
7. Crear botón de Logout, para borrar el usuario guardado en el estado
8. Crear un componente de Registro, y añadir al array de usuarios el nuevo dato
*/

//AQUÍ VOY A CREAR EL ARRAY FAKE DE USUARIOS

const userList = [
  {email:"anacleto@agentesecreto.es", password:"a123", name:"Anacleto", role: "admin"},
  {email:"barbie@fatalwomen.com", password:"b123", name:"Barbie", role: "usuario"},
  {email:"nancy@fatalwomen.com", password:"n123", name:"Nancy", role:"admin"}
]

function App() {

  //Invoco la función useNavigate para navegar por la aplicación

  const navigate = useNavigate()

  //Creo la variable de estado que modificará al usuario duarnte su navegación
  //Como cuando carga la página el ususario no está definido, lo informamos nulo

  //PRIMER ESTADO DEL USER null, no está definido
  //Cuando queremos guardar en user lo que está en sessionStorage, tenemos que hacer el contrario del Strigify
  //Para esto, creamos la variable ssData
  const ssData =JSON.parse(sessionStorage.getItem('token'));
  
  const [user, setUser] = useState(ssData || null);

  //console.log(user);

  //Como aquí es donde tengo la variable de estado de user que va a necesitar el login
  //Aquí es donde vamos a crear una función para enviar los props a Login

  //También necesitamos otra variable de estado para el caso de que se produzca un error de login

  //loginError y loginUser se lo enviaremos a login como props a través de la ruta

  const [loginError, setLoginError] = useState("")// es un string vacío para comunicar el error

  //Creamos dos variables para controlar si el nuevo registro está duplicado

  const [registerDup,setRegisterDup] = useState("")

  const registerNewUser =(newUser)=>{
    const userExist = userList.find((user)=> newUser.email === user.email)
    if(!userExist){
      userList.push(newUser)
    setUser(newUser)
    //console.log(userList)
    navigate("/")
    }
    else{
      setRegisterDup("Este email ya está registrado")
    }
    
  }

  const logoutUser = ()=>{
    setUser(null);
    sessionStorage.removeItem('token');
    navigate("/");
  }

  // logoutUser debo enviarla también al Nav porque es ahí donde se produce el evento

  const loginUser = (formData, prevRoute)=>{
    //Este find es para cuando hacemos consultas a userList
    try {
       API.post('/users/login', formData)
      .then((res)=>{
      console.log(res.data);
      setUser(res.data.userInfo);
      sessionStorage.setItem('token', JSON.stringify(res.data));//Guardamos todo: token y UserInfo
      //Ahora variamos la variable de estado user
      });
    } catch (error) {
      setLoginError(error)
      console.log(loginError)
      navigate(prevRoute || "/")
      
    }

    //Busco con axios con un método POST porque tengo que enviar los que está metido en formdata
    //console.log(formData)
   

      

      //console.log (existsUser);
      // if(existsUser){
      //   setLoginError("")
      //   navigate(prevRoute || "/")
      // }
      // else{
      //   setUser(false)
      //   setLoginError("Usuario o contraseña incorrecta")
      // }
    
    

/*
    if(existsUser){

//SEGUNDO ESTADO DEL USER, información del user logado

      setUser(existsUser)
      setLoginError("")
      // EN CASO DE QUE EL LOGIN SE HAYA REALIZADO A PARTIR DE UNA RUTA PROTEGIDA A LA CUAL NO SE TENÍA ACCESO, UNA VEZ INICIADA LA SESIÓN TE DEVUELVE A LA RUTA PROTEGIDA O AL HOME

      navigate(prevRoute || "/")//Debe ser la última linea de código
    }
    else{
//TERCER ESTADO DEL USER: Ha tratado de hacer login y no pudo
      setUser(false)
      setLoginError("Usuario o contraseña incorrecta")
    }
  
*/
  }

  return (
    <div className="App-header">
      
      <NavBar user={user} logoutUser={logoutUser}/>
      {/* Las rutas protegidas las debemos validar mediante un componente que nos renderice a éstas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<AuthRoutes user={user} component={<Profile user={user}/>}/>} />
        <Route path="/register" element={<AuthRoutes user={user} component={<RegisterUser registerNewUser={registerNewUser} registerDup={registerDup}/>}/>} />
        
        {/* A Profile le envío los valores de user para que pueda pintarlos */}
        
        <Route path="/login" element={<Login loginUser={loginUser} loginError={loginError}/>}></Route>
        <Route path="/check" element={<Check user={user} />}></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      
        {/* <Route path="/contacto" element={<Contact />} /> */}
        {/* <Route path="/producto/:id" element={<ProductDetail/>} /> */}
    </div>
  );
}

export default App;
