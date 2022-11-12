import React from 'react';
import { FiPhoneCall } from "react-icons/fi";

const Number = () => {
  return (
    <div className='flex items-center bg-gradient-to-r from-primary to-secondary space-x-2 py-6 px-6 lg:py-10 rounded-lg text-[#fff]'>
      <FiPhoneCall className='text-[70px] ' />
      <article>
        <h5 className='text-lg font-semibold tracking-wide'>Contact us now</h5>
        <p className='tracking-wider text-sm font-light'>+000 123 456789</p>
      </article>
    </div>
  );
};

export default Number;