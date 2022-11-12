import React from 'react';
import Text from './Text';
import SingleCart from './Cart/SingleCart';
import img1 from '../../../../assets/images/fluoride.png'
import img2 from '../../../../assets/images/cavity.png'
import img3 from '../../../../assets/images/whitening.png'


const Service = () => {

  const cartInfo = [
    {
      "id": 1,
      "img": img1,
      "title": "Fluoride Treatment",
      "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    },
    {
      "id": 2,
      "img": img2,
      "title": "Cavity Filling",
      "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    },
    {
      "id": 3,
      "img": img3,
      "title": "Teeth Whitening",
      "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    }
  ]
  return (
    <div className='container mx-auto mt-24 px-2 lg:px-0'>
      <Text></Text>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-14'>
        {
          cartInfo.map(singleCart => <SingleCart key={singleCart.id} singleCart ={singleCart}></SingleCart>)
        }
      </div>
    </div>
  );
};

export default Service;