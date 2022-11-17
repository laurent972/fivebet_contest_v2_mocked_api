import React, { useState } from 'react'
import { useEffect } from 'react';
import { getPartners } from '../service/api';

function Partenaires() {
const [partners,setPartners] = useState([]);

   useEffect(()=>{
      getPartners().then(response => setPartners(response))
   },[])


  return (
   <div className='bg-white text-center shadow-lg p-1 mb-2 bg-body  position-absolute bottom-0 start-0 end-0'>
      <ul className='ps-0 mb-0'>
      {partners?.map(partner=>(
         
         <li className='d-inline p-2 p-md-3' key={partner.id}>
               <img className='img-fluid' src={partner.img}  width={80} alt={partner.name}  />
         </li>
      ))}
       </ul>
    </div>
  )
}

export default Partenaires