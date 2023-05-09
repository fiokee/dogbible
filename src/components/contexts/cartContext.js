import { createContext, useState, useEffect } from "react";

/*An helper function that helps to find any cartitem that exist and match the id of product. 
    if it finds it increase the quantity otherwise create a new cartitem.
*/
const addItems = (cartItems, productToAdd)=>{
//find if  cartItem contains productToAdd
const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
    );
// if found increment quantity
if(existingCartItem){
  return cartItems.map((cartItem) => 
  cartItem.id === productToAdd.id
     ? { ...cartItem, quantity: cartItem.quantity + 1} 
     : cartItem
     );
}
//retrun new array with modified cartItems / new cartItem
return [...cartItems, {...productToAdd, quantity: 1 }];
};



//an helper function to remove cartItem from the cart 
const removeCartItem =(cartItems, cartItemToRemove)=>{
    // find the cartitem to remove
const existingCartItem = cartItems.find((cartItem)=> cartItem.id === cartItemToRemove.id);

    //check if quantity is equal to 1, if it is remove that item from the cart
if(existingCartItem.quantity ===1){
 return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
}

//return back cartitems with matching cart item with reduced quantity

return cartItems.map((cartItem) => 
  cartItem.id === cartItemToRemove.id
     ? { ...cartItem, quantity: cartItem.quantity - 1} 
     : cartItem
     );
};

const clearCartItem = (cartItems, cartItemToClear)=>{
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}


export const CartContext = createContext({
isCartOpen: false,
setIsCartOpen: ()=> {},
cartItems: [],
addItemsToCart: ()=>{},
removeItemFromCart: ()=>{},
clearItemFromCart: ()=>{},
cartCount: 0,
cartTotal: 0
});

export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    //setting the cartCount

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    },[cartItems]);

    // adding the caritem total
    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.Price,
         0);

        setCartTotal(newCartTotal)
    }, [cartItems])


    // A methode that allows us to add an existing product from product card to the cartItem
    const addItemsToCart = (productToAdd)=>{
    setCartItems(addItems(cartItems, productToAdd));
    }

    //it allow us to remove items from cart
    const removeItemFromCart = (cartItemToRemove)=>{
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }
    //it allow us to delete items from cart
    const clearItemFromCart = (cartItemToClear)=>{
        setCartItems(clearCartItem(cartItems, cartItemToClear));
        }


    const value= {isCartOpen, setIsCartOpen, addItemsToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}