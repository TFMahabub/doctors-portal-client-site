import React from 'react';
import Appointment from './Appointment/Appointment';
import Banner from './Banner.js/Banner';
import Contact from './Contact/Contact';
import Exceptional from './Exceptional/Exceptional';
import Info from './Information/Info';
import Reviews from './Reviews/Reviews';
import Service from './Services/Service';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Service></Service>
      <Exceptional></Exceptional>
      <Appointment></Appointment>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;