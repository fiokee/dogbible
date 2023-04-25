import React, {useContext} from 'react'
import { CartContext } from '../../components/contexts/cartContext';
import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const CheckOut = () => {
    const {cartItems, addItemsToCart, removeItemFromCart}= useContext(CartContext)
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
            // return(
            // <div key={id}>
            //     <h2>{name}</h2>
            //     <span>{quantity}</span><br/>
            //     <span className='counting' onClick={()=>removeItemFromCart(cartItem)}>Decrement</span> 
            //     <br/>
            //     <span className='counting' onClick={()=>addItemsToCart(cartItem)}>increment</span>
            // </div>
            // )
        ))
      }
      <span className='Total'>Total: 0</span>
    </div>
  )
}

export default CheckOut
