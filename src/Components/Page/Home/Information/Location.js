import React from 'react';
import { MdLocationOn } from "react-icons/md";

const Location = () => {
  return (
    <div className='flex items-center bg-accent space-x-2 px-6 py-6 lg:py-10 rounded-lg text-[#fff]'>
      <MdLocationOn className='text-[80px] ' />
      <article>
        <h5 className='text-lg font-semibold tracking-wide'>Visit our location</h5>
        <p className='tracking-wider text-sm font-light'>Brooklyn, NY 10036, United States</p>
      </article>
    </div>
  );
};

export default Location;