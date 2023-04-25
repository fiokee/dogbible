import React from 'react';
import './checkoutitem.style.scss';
import { GoTrashcan } from 'react-icons/go';


const CheckoutItem = ({cartitem}) => {
    const {name, photoUrl, quantity, Price} =cartitem
  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={photoUrl} alt={`${name}`}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{Price}</span>
        <div className='remove-button'><GoTrashcan/></div>
    </div>
  )
}

export default CheckoutItem
