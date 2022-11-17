import { apiUrl } from "./api";
import Cookies from "js-cookie";

// Profil getting user Data
export const LogIn = async (ident) =>{
   const response = await fetch(`${apiUrl}/login`,{
        method:"POST",
        headers: {
          "Content-Type":"application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ident}),
        credentials: "include",
      })
      if(response.ok){
          let result = await response.json();
          localStorage.setItem('auth', 1);
          localStorage.setItem('casino', result.datas.casino);
         // window.location.reload('/home');
          return response
      }
      else if(response.ok === false){
        return response
     }
}

export const handleLogout = async () =>{

   const response = await fetch(`${apiUrl}/logout`,{
      method:"GET",
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      }
     
    })
    if(response.ok){
        localStorage.removeItem('auth');
        Cookies.remove('fivebet-login-contest');
        window.location.reload('/');
    }
    if(response.ok === false){
          return response
    }

    
}

