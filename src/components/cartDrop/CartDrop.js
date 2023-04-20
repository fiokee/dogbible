import React, {useContext} from 'react'
import './CartDrop.styles.scss';
import { CartContext } from '../contexts/cartContext';
import CartItem from '../cart-item/CartItem';

const CartDrop = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) =>( 
        
        <CartItem key={item.id} cartItem={item}/>
      ))}
      </div>
      <button>GO TO CHECKOUT</button>
    </div>
  )
}

export default CartDrop
