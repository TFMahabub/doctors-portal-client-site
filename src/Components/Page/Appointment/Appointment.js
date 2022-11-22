import { format } from 'date-fns';
import React, { useState } from 'react';
import Carts from './BottomSection/Carts';
import TopSection from './TopSection';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())


  console.log(selectedDate);

  return (
    <div className=''>
      <TopSection
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <h3 className='text-2xl font-semibold text-secondary text-center'>Available Appointments on {format(selectedDate, 'PP')}</h3>
      <Carts
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default Appointment;