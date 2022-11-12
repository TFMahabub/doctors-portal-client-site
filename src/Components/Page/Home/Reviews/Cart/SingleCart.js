import React from 'react';

const SingleCart = ({people}) => {
  const { description, name, location, img } = people
  return (
    <div className='shadow-md lg:shadow-2xl p-7'>
      <p>{description}</p>
      <div className='flex items-center space-x-3'>
        <img className='w-16 rounded-full border-2 border-secondary p-[2px] mt-4' src={img} alt="" />
        <div className=''>
          <h4 className='text-lg font-semibold'>{name}</h4>
          <h5 className='font-medium'>{location}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;