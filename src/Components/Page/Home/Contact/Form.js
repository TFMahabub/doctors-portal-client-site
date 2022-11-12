import React from 'react';

const Form = () => {
  return (
    <form className='flex flex-col space-y-4 mt-6'>
      <input className='px-4 rounded-lg py-2' type="text" name='email' placeholder='Email Address' />
      <input className='px-4 rounded-lg py-2' type="text" name='subject' placeholder='Subject' />
      <textarea className='px-4 rounded-lg py-2 h-28' type="text" name='message' placeholder='Your message' />
      <button type='submit' className="btn bg-gradient-to-r from-primary to-secondary capitalize text-lg tracking-wide text-[#fff] border-0">Submit</button>
    </form>
  );
};

export default Form;