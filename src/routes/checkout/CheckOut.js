import React, {useContext} from 'react'
import { CartContext } from '../../components/contexts/cartContext';

const CheckOut = () => {
    const {cartItems}= useContext(CartContext)
  return (
    <div>
      <h1>Hello Checkout</h1>
      {
        cartItems.map((cartitem)=>{
            const {id, name , Price, quantity} = cartitem;
            return(
            <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <span>{Price}</span>
            </div>
            )
        })
      }
    </div>
  )
}

export default CheckOut
