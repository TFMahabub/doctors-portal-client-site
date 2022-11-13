import React from 'react';
import bgImage from '../../../assets/images/footer.png'

const Footer = () => {
  return (
    <footer className='bg-cover bg-center py-14' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='container mx-auto px-2 lg:px-0 lg:flex lg:justify-between lg:items-start'>
        <div className=''>
          <h3 className='text-xl font-semibold tracking-wider text-[#939393]'>SERVICES</h3>
          <a href='' className='text-lg tracking-wider block'>Emergency Checkup</a>
          <a href='' className='text-lg tracking-wider block'>Monthly Checkup</a>
          <a href='' className='text-lg tracking-wider block'>Weekly Checkup</a>
          <a href='' className='text-lg tracking-wider block'>Deep Checkup</a>
        </div>
        <div className='mt-12 lg:mt-0'>
          <h3 className='text-xl font-semibold tracking-wider text-[#939393]'>ORAL HEALTH</h3>
          <a href='' className='text-lg tracking-wider block'>Fluoride Treatment</a>
          <a href='' className='text-lg tracking-wider block'>Cavity Filling</a>
          <a href='' className='text-lg tracking-wider block'>Teath Whitening</a>
        </div>
        <div className='mt-12 lg:mt-0'>
          <h3 className='text-xl font-semibold tracking-wider text-[#939393]'>OUR ADDRESS</h3>
          <a href='' className='text-lg tracking-wider'>New York - 101010 Hudson</a>
        </div>
      </div>
      <p className='text-center mt-16 tracking-wide'>Copyright 2022 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;