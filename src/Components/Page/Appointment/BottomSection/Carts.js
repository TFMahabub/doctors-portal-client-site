import React, { useEffect, useState } from 'react';
import SingleCart from './SingleCart';

const Carts = () => {
  const [appointments, setAppointments]=useState([])
  

  useEffect(()=>{
    fetch('AppoinmentOptions.json')
    .then(res=>res.json())
    .then(data=>setAppointments(data))
  },[])
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
      {
        appointments.map(ap=><SingleCart key={ap._id} ap = {ap}></SingleCart>)
      }


    </div>
  );
};

export default Carts;