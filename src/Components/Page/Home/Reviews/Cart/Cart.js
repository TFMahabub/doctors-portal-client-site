import React from 'react';
import people1 from '../../../../../assets/images/people1.png'
import people2 from '../../../../../assets/images/people2.png'
import people3 from '../../../../../assets/images/people3.png'
import SingleCart from './SingleCart';

const Cart = () => {

  const reviews = [
    {
      "description": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      "img": people1,
      "name": "Winson Herry",
      "location": "California"
    },
    {
      "description": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      "img": people2,
      "name": "Winson Herry",
      "location": "California"
    },
    {
      "description": "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      "img": people3,
      "name": "Winson Herry",
      "location": "California"
    }
  ]
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10'>
      {
        reviews.map(people => <SingleCart key={people.img} people = {people}></SingleCart>)
      }
    </div>
  );
};

export default Cart;