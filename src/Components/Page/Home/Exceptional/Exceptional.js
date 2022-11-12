import React from 'react';
import img from '../../../../assets/images/treatment.png'

const Exceptional = () => {
  return (
    <div className='container mx-auto mt-40 lg:flex lg:justify-center lg:space-x-16 lg:items-center px-2 lg:px-0'>
      <img className='lg:w-1/3 rounded-xl' src={img} alt="" />
      <article className='lg:w-1/3 mt-5 lg:mt-0 space-y-4'>
        <h2 className='text-5xl font-semibold'>Exceptional Dental Care, on Your Terms</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <button className="btn bg-gradient-to-r from-primary to-secondary text-[#fff] border-0">Get Started</button>
      </article>
    </div>
  );
};

export default Exceptional;