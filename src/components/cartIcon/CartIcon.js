import React, {useContext} from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/111 shopping-bag.svg';
import { CartContext } from '../contexts/cartContext';
import './CartIcon.styles.scss';

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen , cartCount} = useContext(CartContext);
  const toggleCartOpen = ()=> setIsCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
