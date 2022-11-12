import React from 'react';
import img1 from '../../../../../assets/images/fluoride.png'
import img2 from '../../../../../assets/images/cavity.png'
import img3 from '../../../../../assets/images/whitening.png'

const SingleCart = ({singleCart}) => {
  const { img, title, description } = singleCart;
  
  return (
    <div className='shadow-lg lg:shadow-2xl p-8 flex flex-col items-center text-center rounded-xl'>
      <img className='h-24' src={img} alt="" />
      <h3 className='text-xl tracking-wide mt-4 font-semibold'>{title}</h3>
      <p className='mt-2'>{description}</p>
    </div>
  );
};

export default SingleCart;