import React from 'react';
import reviewIcons from '../../../../assets/icons/quote.svg'

const Text = () => {
  return (
    <section className='lg:flex items-center justify-between'>
      <article className=''>
        <h3 className='text-xl text-secondary font-semibold'>OUR SERVICES</h3>
        <p className='text-3xl font-semibold'>Services We Provide</p>
      </article>
      <img src={reviewIcons} alt="" />
    </section>
  );
};

export default Text;