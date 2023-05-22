import React, {createContext, useState, useEffect} from 'react'
import BREEDS_DATA from '../shopData';
import {addCollectionAndDocument, getCollectionDocument} from '../../ultis/firebase/firebase.util';

export const CategoriesContext = createContext({
    categoriesMap: {},
   
})



export const CategoriesProvider = ({children})=>{
    const [categoriesMap, setCategorieMap] = useState({});
    // useEffect(()=>{
    //     addCollectionAndDocument('categories', BREEDS_DATA);
    // },[])

    useEffect(()=>{
        const getCategory = async()=>{
        const getCategoryMap = await getCollectionDocument();
        console.log(getCategoryMap)

        setCategorieMap(getCategoryMap);
        };
        getCategory()
    }, [])
   
    const value= {categoriesMap};

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}