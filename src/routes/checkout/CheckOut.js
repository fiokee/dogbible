import React, {useContext} from 'react'
import { CartContext } from '../../components/contexts/cartContext';

const CheckOut = () => {
    const {cartItems, addItemsToCart}= useContext(CartContext)
  return (
    <div>
      <h1>Hello Checkout</h1>
      {
        cartItems.map((cartItem)=>{
            const {id, name , quantity} = cartItem;
            return(
            <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span><br/>
                <span>Decrement</span> 
                <br/>
                <span onClick={()=>addItemsToCart(cartItem)}>increment</span>
            </div>
            )
        })
      }
    </div>
  )
}

export default CheckOut
