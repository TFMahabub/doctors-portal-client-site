import React from 'react';
import { BiTime } from "react-icons/bi";

const Time = () => {
  return (
    <div className='flex items-center bg-gradient-to-r from-primary to-secondary space-x-2 px-6 py-6 lg:py-10 rounded-lg text-[#fff]'>
      <BiTime className='text-[80px] ' />
      <article>
        <h5 className='text-lg font-semibold tracking-wide'>Opening Hours</h5>
        <p className='tracking-wider text-sm font-light'>10.00 a.m - 5.00 p.m</p>
      </article>
    </div>
  );
};

export default Time;