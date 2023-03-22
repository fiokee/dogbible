import React from 'react'
import './product-card.styles.scss';
import DogPic from '../../assets/dog1.png';

const ProductCard = () => {
  return (
    <div className='product-card-container'>
      <img src={DogPic}/>
      <div className='footer'>
        <span className='name'>Name</span>
        <span className='price'>Price</span>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard
