import React, { useContext }from 'react';
import { CartContext } from '../contexts/cartContext';
import { GrAdd } from 'react-icons/gr';
import { AiOutlineMinus } from 'react-icons/ai';
import './checkoutitem.style.scss';
import { GoTrashcan } from 'react-icons/go';


const CheckoutItem = ({cartitem}) => {

  const {name, photo, quantity, Price} =cartitem;

  const {clearItemFromCart , addItemsToCart, removeItemFromCart} = useContext(CartContext);

  const clearItemHandler = ()=> clearItemFromCart(cartitem);
  const removeItemHandler = ()=> removeItemFromCart(cartitem);
  const addItemHandler = ()=> addItemsToCart(cartitem);

  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={photo} alt={`${name}`}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow' onClick={removeItemHandler}><AiOutlineMinus/></div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={addItemHandler}><GrAdd/></div>
          </span>
        <span className='price'>{Price}</span>
        <div className='remove-button' onClick={clearItemHandler}><GoTrashcan/></div>
    </div>
  )
}

export default CheckoutItem
