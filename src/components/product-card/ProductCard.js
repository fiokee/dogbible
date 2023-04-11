import React from 'react'
import './product-card.styles.scss';
import DogPic from '../../assets/dog1.png';

const ProductCard = ({product}) => {
  const {name, photo, Price} = product
  return (
    <div className='product-card-container'>
      <img src={photo} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${Price}</span>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard
