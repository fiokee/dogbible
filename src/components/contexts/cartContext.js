import { createContext, useState } from "react";

/*An helper function that helps to find any cartitem that exist and match the id of product. 
    if it finds it increase the quantity otherwise create a new cartitem.
*/
const addItems = (cartItems, productToAdd)=>{
//find if  cartItem contains productToAdd
const existingCartItem = cartItems.find((cartItem) =>cartItem.id === productToAdd.id)
// if found increment quantity
if(existingCartItem){
  return cartItems.map((cartItem) => cartItem.id === productToAdd.id
     ? {...cartItems, quantity: cartItem.quantity + 1} : cartItem)
}
//retrun new array with modified cartItems / new cartItem
return [...cartItems, {...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
isCartOpen: false,
setIsCartOpen: ()=> {},
cartItems: [],
addItemsToCart: ()=>{}
});

export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // A methode that allows us to add an existing product from product card to the cartItem
    const addItemsToCart = (productToAdd)=>{
    setCartItems(addItems(cartItems, productToAdd));
    }


    const value= {isCartOpen, setIsCartOpen, addItemsToCart, cartItems}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}