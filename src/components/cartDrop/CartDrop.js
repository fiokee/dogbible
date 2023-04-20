import React, {useContext} from 'react'
import './CartDrop.styles.scss';
import { CartContext } from '../contexts/cartContext';
import CartItem from '../cart-item/CartItem';

const CartDrop = (cartItem) => {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem) =>( 
        
        <CartItem key={cartItem.id} cartItem={cartItem}/>
      ))}
      </div>
      <button>GO TO CHECKOUT</button>
    </div>
  )
}

export default CartDrop
