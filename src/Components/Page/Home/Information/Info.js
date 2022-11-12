import React from 'react';
import Location from './Location';
import Number from './Number';
import Time from './Time';

const Info = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 container px-2 lg:px-0 mx-auto lg:mt-36'>
      <Time></Time>
      <Location></Location>
      <Number></Number>
    </div>
  );
};

export default Info;