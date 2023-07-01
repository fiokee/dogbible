import React, {Fragment, useContext} from 'react'
import './product-card.styles.scss';
import DogPic from '../../assets/dog1.png';
import { CartContext } from '../contexts/cartContext';

const ProductCard = ({product}) => {
  const {addItemsToCart} = useContext(CartContext)
  const {name, photo, Price} = product
  
  const addProducttoCart = ()=> addItemsToCart(product)
  
  return (
    <Fragment>
    <div className='container-box'>
    <div className='product-card-container'>
      <img src={photo} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${Price}</span>
      </div>
      <button onClick={addProducttoCart}>Add To Cart</button>
    </div>
    </div>
    </Fragment>
  )
}

export default ProductCard
