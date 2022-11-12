import React from 'react';
//image-
import backgroundImage from '../../../../assets/images/bg.png'
import chair from '../../../../assets/images/chair.png'

const Banner = () => {
  return (
    <section className='pb-8 lg:pb-0 lg:h-[580px] border-2' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero mx-auto lg:mt-16 container">
        <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">
          <img src={chair} className="lg:w-1/2 rounded-lg lg:hover:scale-105 lg:duration-300 shadow-2xl" alt='' />
          <article>
            <h1 className="text-[25px] lg:text-[40px] lg:max-w-md font-bold tracking-wide">Your New Smile Starts Here</h1>
            <p className="py-3 lg:py-6 lg:max-w-md">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-gradient-to-r from-primary to-secondary text-[#fff] border-0">Get Started</button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Banner;