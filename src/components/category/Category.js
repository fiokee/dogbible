import React, {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { CategoriesContext } from '../contexts/categoriesContext';
import ProductCard from '../product-card/ProductCard';
import './category.style.scss'

const Category = () => {
const {category} = useParams();
const {categoriesMap} = useContext(CategoriesContext);
const [products, setProducts] = useState(categoriesMap[category]);

useEffect(()=>{
setProducts(categoriesMap[category]);
},[category, categoriesMap])

  return (
    <div className='category-container'>
        {products &&
         products.map((product)=>( 
         <ProductCard key={product.id} product={product}/>
         ))}
    </div>
  )
}

export default Category