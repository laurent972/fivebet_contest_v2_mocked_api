//export  const apiUrl = 'https://fivebetpoker.com/wp-json/fivebet/v1';
//export  const apiUrl = 'http://localhost/wordpress/wp-json/fivebet/v1';
// export  const apiUrl = 'https://dev.tarnevents.fr/wp-json/fivebet/v1';
export  const apiUrl = 'https://my-json-server.typicode.com/laurent972/json-server-db';


//Getting all users
export const getPlayers = async () =>{
   const response = await fetch(`${apiUrl}/players`,{ credentials: "include" });
   if(response.ok){
      const players = await response.json();
      return players;
   }
   else if(response.ok === false){
         return response
   }
}

//Getting all users
export const getParticipants = async () =>{
   const response = await fetch(`${apiUrl}/participants`,{ credentials: "include" });
   if(response.ok){
      const users = await response.json();
      return users;
   }
   else if(response.ok === false){
      return response
   }
}

// Getting allSucces
export const getSuccess = async () =>{
   const response = await fetch(`${apiUrl}/success`, { credentials: "include" })
   if(response.ok){
      const user = await response.json();
      return user;
   }
   else if(response.ok === false){
      return response
   }
}


// Profil getting user Data
export const getUserData = async (id) =>{
   const response = await fetch(`${apiUrl}/participants/${id.id}`, { credentials: "include" })
   if(response.ok){
      const user = await response.json();
      return user;
   }
   else if(response.status===400 || response.status===500){
         console.log(response);
   }
}

// Profil getting user Data
export const getPartners = async (id) =>{
   const response = await fetch(`${apiUrl}/partenaires`, { credentials: "include" })
   if(response.ok){
      const partners = await response.json();
      return partners;
   }
   else if(response.status===400 || response.status===500){
         console.log(response);
   }
}

//Change pseudo
// Profil getting user Data
export const changePseudo = async (id,pseudo) =>{
   const response = await fetch(`${apiUrl}/participants/${id}`,{
        method:"POST",
        headers: {
          "Content-Type":"application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({"display_name": pseudo}),
        credentials: "include",
      })
      if(response.ok){
          let result = await response.json();
          return response
      }
      else if(response.ok === false){
        return response
     }
}