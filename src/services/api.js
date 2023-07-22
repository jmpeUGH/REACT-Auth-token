//Aquí voy a definir las peticiones a la API
//Fichero de js. No es jsx

import axios from "axios";

// creamos las cabeceras que tenemos que enviar y el axios que contiene las cabeceras

//Cabeceras:

export const APIHeaders = {
    'Accept':'aplication/json',
    'Content-Type':'aplication/json',
    'Access-Control-Allow-Origin': '*',
    'Authoritation':{
        toString(){
            return `Bearer ${localStorage.getItem('userToken')}`
        }
    },
}


//Creo el fichero de configuración de las solicitudes de axios a la API
//De aquí voy a la función loginUser de la APP a ahcer el fetch con axios

export const API =  axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    timeout: 10000,
    headers: APIHeaders,

})

//Guardamos la información en LocalStorage:
/*
localStorage.setItem('user','usuario');//guardo token
localStorage.getItem('user'); //obtengo token
localStorage.removeItem('user');//eliminar token
*/