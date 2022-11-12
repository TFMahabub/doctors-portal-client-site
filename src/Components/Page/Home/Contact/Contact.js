import React from 'react';
import Form from './Form';
import Text from './Text';
import bgImage from '../../../../assets/images/appointment.png'

const Contact = () => {
  return (
    <section style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='container max-w-md py-10 mx-auto mt-24 px-4 lg:px-0'>
        <Text></Text>
        <Form></Form>
      </div>
    </section>
  );
};

export default Contact;