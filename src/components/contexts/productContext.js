import React, {createContext, useState, useEffect} from 'react'
import BREEDS_DATA from '../shopData';
import {addCollectionAndDocument} from '../../ultis/firebase/firebase.util';

export const ProductsContext = createContext({
    products: [],
    // setProducts: ()=> []
})



export const ProductsProvider = ({children})=>{
    const [products, setProducts] = useState([]);
    // useEffect(()=>{
    //     addCollectionAndDocument('categories', BREEDS_DATA);
    // },[])
   
    const value= {products};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}