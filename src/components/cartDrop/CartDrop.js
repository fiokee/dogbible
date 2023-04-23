import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './CartDrop.styles.scss';
import { CartContext } from '../contexts/cartContext';
import CartItem from '../cart-item/CartItem';

const CartDrop = () => {
  
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate();

  const gotoCheckoutHandler = ()=>{
    navigate('./checkout');
  }
  
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) =>( 
        
        <CartItem key={item.id} cartItem={item}/>
      ))}
      </div>
      <button onClick={gotoCheckoutHandler}>GO TO CHECKOUT</button>
    </div>
  )
}

export default CartDrop
