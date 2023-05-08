import React, { useContext }from 'react';
import { CartContext } from '../contexts/cartContext';

import './checkoutitem.style.scss';
import { GoTrashcan } from 'react-icons/go';


const CheckoutItem = ({cartitem}) => {

  const {name, photoUrl, quantity, Price} =cartitem;

  const {clearItemFromCart , addItemsToCart, removeItemFromCart} = useContext(CartContext);

  const clearItemHandler = ()=> clearItemFromCart(cartitem);

  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={photoUrl} alt={`${name}`}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow'>-</div>
          <span className='value'>{quantity}</span>
          <div className='arrow'>+</div>
          </span>
        <span className='price'>{Price}</span>
        <div className='remove-button' onClick={clearItemHandler}><GoTrashcan/></div>
    </div>
  )
}

export default CheckoutItem
