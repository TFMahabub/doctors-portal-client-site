import React from 'react';
import bgImage from '../../../../assets/images/appointment.png'
import doctor from '../../../../assets/images/doctor-small.png'

const Appointment = () => {
  return (
    <section className='mt-80 lg:flex lg:items-center px-4 py-6 lg:py-0' style={{ backgroundImage: `url(${bgImage})`}}>
      <div className='w-full'>
        <img className='mt-[-130px] hidden lg:block' src={doctor} alt="" />
      </div>
      <article className='w-full mt-5 lg:mt-0 space-y-4 text-white'>
        <h3 className='text-2xl font-semibold tracking-wide text-secondary'>Appointment</h3>
        <h2 className='text-4xl font-semibold tracking-wide'>Make an appointment Today</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <button className="btn bg-gradient-to-r from-primary to-secondary text-[#fff] border-0">Get Started</button>
      </article>
    </section>
  );
};

export default Appointment;