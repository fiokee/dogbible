import React, {createContext, useState} from 'react'
import ProductsData from '../../components/shopData';


export const ProductsContext = createContext({
    products: [],
    // setProducts: ()=> []
})

export const ProductsProvider = ({children})=>{
    const [products, setProducts] = useState([]);
    const value= {products};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}