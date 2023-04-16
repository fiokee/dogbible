import { createContext, useState } from "react";

/*An helper function that helps to find any cartitem that exist and match the id of product. 
    if it finds it increase the quantity otherwise create a new cartitem.
*/
const addItems = (cartItems, productToAdd)=>{

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

    // A metthode that allow us to add an existing product from product card to the cartItem
    const addItemsToCart = (productToAdd)=>{

    }


    const value= {isCartOpen, setIsCartOpen}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}