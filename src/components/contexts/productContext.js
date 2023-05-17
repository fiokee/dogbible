import React, {createContext, useState, useEffect} from 'react'
import BREEDS_DATA from '../shopData';
import {addCollectionAndDocument, getCollectionDocument} from '../../ultis/firebase/firebase.util';

export const ProductsContext = createContext({
    products: [],
   
})



export const ProductsProvider = ({children})=>{
    const [products, setProducts] = useState([]);
    // useEffect(()=>{
    //     addCollectionAndDocument('categories', BREEDS_DATA);
    // },[])

    useEffect(()=>{
        const getCategory = async()=>{
        const getCategoryMap = await getCollectionDocument();
        console.log(getCategoryMap)
        };
        getCategory()
    }, [])
   
    const value= {products};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}