import React from 'react'
import './CartDrop.styles.scss';
import CartItem from '../cart-item/CartItem';

const CartDrop = (cartItem) => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <CartItem cartItem={cartItem}/>
      </div>
      <button>GO TO CHECKOUT</button>
    </div>
  )
}

export default CartDrop
