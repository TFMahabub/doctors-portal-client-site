import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Sheared-Componentd/Footer/Footer';
import Navbar from '../Components/Sheared-Componentd/Navbar/Navbar';

const MainOutLet = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainOutLet;