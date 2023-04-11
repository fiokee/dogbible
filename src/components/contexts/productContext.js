import React, {createContext, useState} from 'react'
import ProductsData from '../../Shop_data.json';


export const ProductsContext = createContext({
    products: [],
    // setProducts: ()=> []
})

export const ProductsProvider = ({children})=>{
    const [products, setProducts] = useState(ProductsData);
    const value= {products};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}