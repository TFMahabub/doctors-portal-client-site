import React from 'react';
import reviewIcons from '../../../../assets/icons/quote.svg'

const Text = () => {
  return (
    <section className='lg:flex items-center justify-between'>
      <article className=''>
        <h3 className='text-xl text-secondary font-semibold'>Testimonial</h3>
        <p className='text-4xl'>What Our Patients Says</p>
      </article>
      <img className='lg:w-52 w-32 mt-8 lg:mt-0' src={reviewIcons} alt="" />
    </section>
  );
};

export default Text;