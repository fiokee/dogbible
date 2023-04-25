import React, {useContext} from 'react'
import { CartContext } from '../../components/contexts/cartContext';
import './checkout.styles.scss'

const CheckOut = () => {
    const {cartItems, addItemsToCart, removeItemFromCart}= useContext(CartContext)
  return (
    <div>
      <h1>Hello Checkout</h1>
      {
        cartItems.map((cartItem)=>{
            const {id, name , quantity} = cartItem;
            return(
            <div key={id} className='container'>
                <h2>{name}</h2>
                <span>{quantity}</span><br/>
                <span className='counting' onClick={()=>removeItemFromCart(cartItem)}>Decrement</span> 
                <br/>
                <span className='counting' onClick={()=>addItemsToCart(cartItem)}>increment</span>
            </div>
            )
        })
      }
    </div>
  )
}

export default CheckOut
