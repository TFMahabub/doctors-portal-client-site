import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
//image-
import backgroundImage from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'

const TopSection = ({selectedDate, setSelectedDate}) => {
  
  return (
    <section className='pb-8 lg:pb-0 lg:h-[460px]' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero mx-auto lg:mt-16 container">
        <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">
          <img src={chair} className="lg:w-1/2 rounded-lg lg:hover:scale-105 lg:duration-300 shadow-2xl" alt='' />
          <DayPicker
            mode="single"
            selected = {selectedDate}
            onSelect = {setSelectedDate}
            className='shadow-2xl lg:p-5'
          ></DayPicker>
        </div>
      </div>
    </section>
  );
};

export default TopSection;