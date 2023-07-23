import { useEffect } from "react";
import { APIToken } from "../services/api";

function Check({user}){

    useEffect(()=>{
        APIToken.post('/users/admin')
            .then((data)=> console.log(data))

    })
    
    

}

export default Check;