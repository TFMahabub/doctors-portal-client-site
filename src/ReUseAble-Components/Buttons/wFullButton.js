import React from 'react';

const WidthFullButton = ({children}) => {
  return (
    <button 
      className='py-2 w-full bg-secondary font-medium text-[#fff] tracking-wide rounded-md'
    >
      {children}
    </button>
  );
};

export default WidthFullButton;