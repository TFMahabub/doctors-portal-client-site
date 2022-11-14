import React from 'react';

const SingleCart = ({ap}) => {
  const {name, slots} = ap;
  return (
    <div className='border p-8 text-center shadow-lg'>
      <h3 className='text-xl font-semibold text-secondary'>{name}</h3>
      <p className='tracking-wide'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
      <p className='tracking-wide'>{slots.length > 1 ? `${slots.length}  SPACESES AVAILABLE` : `${slots.length} SPACES AVAILABLE`}</p>
      <button className="btn mt-3 px-6 tracking-wide bg-gradient-to-r from-primary to-secondary text-[#fff] text-md border-0">Book Appointment</button>
    </div>
  );
};

export default SingleCart;