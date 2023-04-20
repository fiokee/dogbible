import React from 'react'
import './cartItem.scss'
const CartItem = ({cartItem}) => {
    const{name, photoUrl, quantity, Price} = cartItem;
  return (
    <div className='cart-item-container'>
      <img src={photoUrl} alt={`${name}`}/>
      <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x ${Price}</span>
      </div>
    </div>
  )
}

export default CartItem
