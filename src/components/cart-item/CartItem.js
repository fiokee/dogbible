import React from 'react'
import './cartItem.scss'
const CartItem = ({cartItem}) => {
    const{name, photo, quantity, Price} = cartItem;
  return (
    <div className='cart-item-container'>
      <img src={photo} alt={`${name}`}/>
      <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x ${Price}</span>
      </div>
    </div>
  )
}

export default CartItem
