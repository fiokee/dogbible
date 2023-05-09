import React, {useContext} from 'react'
import { CartContext } from '../../components/contexts/cartContext';
import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const CheckOut = () => {
    const {cartItems, cartTotal}= useContext(CartContext)
    console.log(cartTotal)
  return (
    
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
      </div>
    
      {
        cartItems.map((cartItem)=>(
           

        <CheckoutItem key={cartItem.id} cartitem={cartItem}/>
        ))
      }
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  )
}

export default CheckOut
