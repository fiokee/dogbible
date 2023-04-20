import React from 'react'

const CartItem = ({cartItem}) => {
    const{name, quantity, price} = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
      <span>{price}</span>
    </div>
  )
}

export default CartItem
